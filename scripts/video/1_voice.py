"""Generate the narration track for the Phase 2 film.

Each script segment is synthesised separately so its real duration can be
measured. Those measured durations become the film's timeline, which keeps the
spoken word and the on-screen visual locked together frame for frame.

Outputs:
  build/voice/<id>.mp3     one clip per segment
  build/voice.wav          the concatenated narration bed
  build/timings.json       {id, start, end, dur} for the renderer and captions
"""

import asyncio
import json
import pathlib
import subprocess
import sys

import edge_tts

ROOT = pathlib.Path(__file__).resolve().parents[2]
HERE = pathlib.Path(__file__).resolve().parent
BUILD = HERE / "build"
VOICE_DIR = BUILD / "voice"
SCRIPT = json.loads((HERE / "narration.json").read_text(encoding="utf-8"))


def probe_duration(path: pathlib.Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True, check=True,
    )
    return float(out.stdout.strip())


async def synthesise(segment, rate, pitch):
    target = VOICE_DIR / f"{segment['id']}.mp3"
    communicate = edge_tts.Communicate(
        segment["text"], SCRIPT["voice"], rate=rate, pitch=pitch
    )
    await communicate.save(str(target))
    return target


async def main():
    rate = sys.argv[1] if len(sys.argv) > 1 else SCRIPT["rate"]
    pitch = SCRIPT.get("pitch", "+0Hz")
    VOICE_DIR.mkdir(parents=True, exist_ok=True)

    gap = SCRIPT["gapMs"] / 1000.0
    timings = []
    cursor = 0.6  # a short breath before the first line

    for segment in SCRIPT["segments"]:
        path = await synthesise(segment, rate, pitch)
        dur = probe_duration(path)
        timings.append({
            "id": segment["id"],
            "scene": segment["scene"],
            "start": round(cursor, 3),
            "end": round(cursor + dur, 3),
            "dur": round(dur, 3),
            "caption": SCRIPT["captions"][segment["id"]],
        })
        cursor += dur + gap
        print(f"  {segment['id']}  {dur:6.2f}s  ->  {cursor:6.2f}s")

    total = round(cursor - gap + 1.4, 3)  # hold the closing card after the last word

    # Lay each clip onto a silent bed at its exact timeline position. Mixing with
    # per-input adelay (rather than concatenating) means the rendered audio and
    # timings.json can never drift apart, whatever the decoders do.
    cmd = ["ffmpeg", "-y", "-v", "error",
           "-f", "lavfi", "-t", f"{total}", "-i", "anullsrc=r=48000:cl=mono"]
    for segment in SCRIPT["segments"]:
        cmd += ["-i", str(VOICE_DIR / f"{segment['id']}.mp3")]

    chains = ["[0:a]aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=mono[bed]"]
    labels = ["[bed]"]
    for index, entry in enumerate(timings, start=1):
        delay_ms = int(round(entry["start"] * 1000))
        chains.append(
            f"[{index}:a]aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=mono,"
            f"adelay={delay_ms}[v{index}]"
        )
        labels.append(f"[v{index}]")
    chains.append(
        "".join(labels) + f"amix=inputs={len(labels)}:normalize=0:dropout_transition=0[mix]"
    )
    # gentle broadcast polish: high-pass off rumble, mild compression, -16 LUFS
    chains.append(
        "[mix]highpass=f=85,"
        "acompressor=threshold=-18dB:ratio=3:attack=8:release=180,"
        "loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000[out]"
    )

    cmd += ["-filter_complex", ";".join(chains), "-map", "[out]",
            "-t", f"{total}", "-ac", "1", "-ar", "48000", str(BUILD / "voice.wav")]
    subprocess.run(cmd, check=True)

    (BUILD / "timings.json").write_text(
        json.dumps({"total": total, "fps": 24, "segments": timings}, indent=2),
        encoding="utf-8",
    )
    print(f"\ntotal narration timeline: {total:.2f}s  ({total/60:.2f} min)")
    if total > 120:
        print(f"OVER BUDGET by {total - 120:.2f}s - re-run with a faster rate")


if __name__ == "__main__":
    asyncio.run(main())
