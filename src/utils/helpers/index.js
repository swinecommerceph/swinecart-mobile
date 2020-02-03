import last from 'lodash/last';
import upperCase from 'lodash/upperCase'

export function getHeight(status) {
  switch (status) {
    case 'requested': return 194;
    case 'sold': return 176;
    case 'reserved': case 'onDelivery': return 266;
  }
}

export function getInitials(fullName) {
  const suffixes = ['II, III']; 
  const [firstName, ...otherNames] = fullName.split(' ');
  const initials = firstName[0] + last(otherNames)[0];
  return upperCase(initials);
}

export function normalize(items) {
  return items.reduce((accu, element, currentIndex) => {
    accu.ids.push(element.id);
    accu.entities[element.id] = element;
    return accu;
  }, { ids: [], entities: {} });
}

export function createOrderReducers(orderReducer) {
  const statuses = ['requested', 'reserved', 'onDelivery', 'sold'];

  return statuses.reduce((a, status) => {
    a[status] = orderReducer;
    return a;
  }, {});
}