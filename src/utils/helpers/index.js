import last from 'lodash/last';
import upperCase from 'lodash/upperCase';
import _find from 'lodash/find';

export function getInitials(fullName) {
  const suffixes = ['II, III']; 
  const [firstName, ...otherNames] = fullName.split(' ');
  const initials = firstName[0] + last(otherNames)[0];
  return upperCase(initials);
}

export function findElement(array, predicate) {
  return _find(array, predicate);
}