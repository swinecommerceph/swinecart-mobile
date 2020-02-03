import transform from 'lodash/transform';
import {
  Order, Product, Reservation, Request, BreederProfile
} from '../mappings';

export function requestMapper(transformedData) {
  return transform(transformedData, (result, value, key) => {
    if (Request[key]) {
      result[Request[key]] = value;
    }
  }, {});
}