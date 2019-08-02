function rangeSetStringIsValid(rangeSetString: string): boolean {
  return /^\d+(-\d+)?(,\d+(-\d+)?)*$/.test(rangeSetString);
}

export function parseRangeSetString(
  rangeSetString: string
): Set<number> | null {
  if (!rangeSetStringIsValid(rangeSetString)) {
    return null;
  }
  const ranges = rangeSetString.split(",");
  let rangeSet = new Set<number>();
  ranges.forEach(rangeSpec => {
    let range = rangeSpec.split("-");
    if (range.length === 1) {
      return rangeSet.add(~~range[0]);
    }
    let rangeStart = Math.min(~~range[0], ~~range[1]);
    let rangeEnd = Math.max(~~range[0], ~~range[1]);
    let newRangeSet = new Set<number>();
    for (let i = rangeStart; i <= rangeEnd; i++) {
      newRangeSet.add(i);
    }
    // TODO: Use something other than a generator function
    // to prevent the generated bundle emiting calls to
    // regenerator.
    rangeSet = new Set<number>(
      (function*() {
        yield* rangeSet;
        yield* newRangeSet;
      })()
    );
  });
  return rangeSet;
}
