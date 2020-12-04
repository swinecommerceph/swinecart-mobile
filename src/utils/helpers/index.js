import last from 'lodash/last';
import upperCase from 'lodash/upperCase';
import _find from 'lodash/find';

export function getInitials(fullName) {
  const [firstName, ...otherNames] = fullName.split(' ');

  const initials = otherNames.length > 0
    ? firstName[0] + last(otherNames)[0]
    : firstName.substring(0, 2);

  return upperCase(initials);

}

export function findElement(array, predicate) {
  return _find(array, predicate);
}