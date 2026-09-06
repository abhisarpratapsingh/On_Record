"""Mux the frame sequence and the narration bed into the deliverable.

Outputs (output/video/):
  on-record-phase-2.mp4      H.264 / AAC, 1920x1080 @ 24fps
  on-record-phase-2.srt      captions, generated from the same timings
  poster.jpg                 thumbnail
"""

import json
import pathlib
import subprocess
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
_flags = [a for a in sys.argv[1:] if a.startswith("--lang=")]
LANG = _flags[0].split("=")[1] if _flags else "en"
BUILD = HERE / ("build" if LANG == "en" else f"build-{LANG}")
OUT = ROOT / "output" / "video"
OUT.mkdir(parents=True, exist_ok=True)

timings = json.loads((BUILD / "timings.json").read_text(encoding="utf-8"))
fps = timings["fps"]
stem = "on-record-phase-2" + ("" if LANG == "en" else f"-{LANG}")
mp4 = OUT / f"{stem}.mp4"


def run(cmd):
    subprocess.run(cmd, check=True)


def srt_time(seconds: float) -> str:
    ms = int(round(seconds * 1000))
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


# ── video ────────────────────────────────────────────────────────────────────
run([
    "ffmpeg", "-y", "-v", "error", "-stats",
    "-framerate", str(fps), "-i", str(BUILD / "frames" / "f%05d.jpg"),
    "-i", str(BUILD / "voice.wav"),
    "-c:v", "libx264", "-preset", "slow", "-crf", "17",
    "-pix_fmt", "yuv420p", "-profile:v", "high", "-level", "4.1",
    "-x264-params", "keyint=48:min-keyint=24",
    "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
    "-movflags", "+faststart", "-shortest", str(mp4),
])

# ── captions ─────────────────────────────────────────────────────────────────
lines = []
segments = timings["segments"]
for i, seg in enumerate(segments, start=1):
    # hold each cue a beat past the last word, but never into the next one
    nxt = segments[i]["start"] - 0.04 if i < len(segments) else timings["total"]
    end = min(seg["end"] + 0.25, nxt)
    lines += [str(i), f"{srt_time(seg['start'])} --> {srt_time(end)}", seg["caption"], ""]
(OUT / f"{stem}.srt").write_text("\n".join(lines), encoding="utf-8")

# ── poster ───────────────────────────────────────────────────────────────────
run(["ffmpeg", "-y", "-v", "error", "-ss", "75", "-i", str(mp4),
     "-frames:v", "1", "-q:v", "2", str(OUT / f"poster{'' if LANG == 'en' else '-' + LANG}.jpg")])

probe = subprocess.run(
    ["ffprobe", "-v", "error", "-show_entries",
     "format=duration,size:stream=codec_name,width,height,r_frame_rate,channels",
     "-of", "json", str(mp4)],
    capture_output=True, text=True, check=True,
)
info = json.loads(probe.stdout)
fmt = info["format"]
print(f"\n{mp4}")
print(f"  duration {float(fmt['duration']):.2f}s   size {int(fmt['size'])/1e6:.1f} MB")
for st in info["streams"]:
    print("  " + ", ".join(f"{k}={v}" for k, v in st.items()))
