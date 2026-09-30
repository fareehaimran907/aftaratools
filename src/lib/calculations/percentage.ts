export function calculatePercentage(value: number, total: number) {
  if (isNaN(value) || isNaN(total)) {
    throw new Error("Invalid numbers provided");
  }
  if (total === 0) {
    if (value === 0) return 0;
    throw new Error("Cannot calculate percentage of zero");
  }
  return (value / 100) * total;
}

export function calculateWhatPercentage(part: number, total: number) {
  if (isNaN(part) || isNaN(total)) {
    throw new Error("Invalid numbers provided");
  }
  if (total === 0) {
    if (part === 0) return 0;
    throw new Error("Cannot calculate percentage of zero");
  }
  return (part / total) * 100;
}

export function calculatePercentageChange(oldValue: number, newValue: number) {
  if (isNaN(oldValue) || isNaN(newValue)) {
    throw new Error("Invalid numbers provided");
  }
  if (oldValue === 0) {
    if (newValue === 0) return 0;
    throw new Error("Cannot calculate percentage change from zero");
  }
  return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
}
