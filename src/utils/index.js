import memoize from 'lodash/memoize';

export const computeLineHeight = memoize(fontSize => {
  return ~~(fontSize * 1.618);
});