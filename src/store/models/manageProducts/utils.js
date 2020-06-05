
export function determineVisiblity(currentStatus) {
  if (currentStatus === 'requested') return currentStatus;
  return currentStatus === 'hidden' ? 'displayed' : 'hidden'
}