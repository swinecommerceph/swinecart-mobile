import transform from 'lodash/transform';
import {
  Order, Product, Reservation, Request, BreederProfile
} from '../mappings'

const statusTexts = {
  'requested': 'requested',
  'reserved': 'reserved',
  'on_delivery': 'onDelivery',
  'sold': 'sold',
};


export function productMapper(rawData) {
  return transform(rawData, (result, value, key) => {
    if (Product[key]) {

      if (key === 'is_unique') {
        result[Product[key]] = value === 1;
      }
      else {
        result[Product[key]] = value;
      }
    }
  }, {});
}

export function breederProfileMapper(rawData) {
  return transform(rawData, (result, value, key) => {
    if (BreederProfile[key]) {
      result[BreederProfile[key]] = value;
    }
  }, {});
}

export function reservationMapper(rawData) {
  return transform(rawData, (result, value, key) => {
    if (Reservation[key]) {
      result[Reservation[key]] = value;
    }
  }, {});
}

export function requestMapper(rawData) {
  return transform(rawData, (result, value, key) => {
    if (Request[key]) {
      result[Request[key]] = value;
    }
  }, {});
}

export function orderMapper(rawData) {
  return transform(rawData, (result, value, key) => {
    if (Order[key]) {
      if (key === 'status') {
        result[Order[key]] = statusTexts[value];
      }
      else if (key === 'product') {
        result['product'] = productMapper(rawData['product']);
      }
      else if (key === 'reservation') {
        result['reservation'] = reservationMapper(rawData['reservation']);
      }
      else {
        result[Order[key]] = value;
      }
    }
  }, {});
};