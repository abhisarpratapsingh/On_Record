export function appendEvent(state, event) {
  return { ...state, events: [...state.events, { ...event, id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, at: '06 Sep 2026 · now' }] };
}

export function visibleRecords(state, memberId) {
  return state.records.filter((record) => state.grants[`${memberId}:${record.id}`]);
}
