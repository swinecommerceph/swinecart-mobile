import parseInt from 'lodash/parseInt';
import upperFirst from 'lodash/upperFirst';
import startCase from 'lodash/startCase';
import upperCase from 'lodash/upperCase';

import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

import _pluralize from 'pluralize';

export function capitalizeWords(string) {
  return startCase(string);
}

export function uppercaseWord(string) {
  return upperCase(string);
}

export function pluralize(value, string) {
  const val = parseInt(value);
  return _pluralize(string, val, true);
}

export function formatStatusTime(date) {
  // return date;
  return format(parseISO(date), 'MMM d yyyy (eeee), h:mm a');
}

export function formatDateNeeded(date) {  
  return format(parseISO(date), 'MMMM d, yyyy (eeee)')
}

export function formatDeliveryDate(date) {
  return format(typeof date === 'object' ? date : parseISO(date), 'MMMM d, yyyy (eeee)');
}

export function formatMessageDate(date) {
  const now = new Date();

  if (isSameDay(now, parseISO(date))) {
    return format(parseISO(date), 'h:mm a');
  }
  else {
    return format(parseISO(date), 'MMM d');
  }
}

export function formatDateInput(date) {
  return format(date, 'yyyy-MM-dd');
}

export function formatCreatedAt(date) {
  const distanceToNow = formatDistanceToNow(parseISO(date));
  return `${upperFirst(distanceToNow)} ago`;
}

export function formatBirthdate(date) {
  return format(parseISO(date), 'MMMM d, yyyy');
}