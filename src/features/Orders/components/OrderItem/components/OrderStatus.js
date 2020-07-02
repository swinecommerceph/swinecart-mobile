import React, { Fragment, memo } from 'react';
import { Text } from 'atoms';
import { pluralize, formatStatusTime } from 'utils/formatters';

const statusTexts = {
  'requested': 'Requested',
  'reserved': 'Reserved',
  'onDelivery': 'On Delivery',
  'sold': 'Sold',
};

function OrderStatus({ status, reservation, requestCount }) {
  return (
    <Fragment>
      <Text 
        bold size={14} color='black1'
        marginBottom={0.25} marginTop={1}
      >
        {statusTexts[status]}
      </Text>
      {
        status === 'requested' &&
        <Text normal color='gray3' size={14} textAlign='left'>
          {`by ${pluralize(requestCount, 'customer')}`}
        </Text>
      }
      {
        status !== 'requested' &&
        <Fragment>
          <Text normal color='gray3' size={14} textAlign='left'>
            {`to ${reservation.customerName}`}
          </Text>
          <Text normal color='gray3' size={14} textAlign='left'>
            {formatStatusTime(reservation.statusTime)}
          </Text>
        </Fragment>
      }
    </Fragment>
  );
}

export default memo(OrderStatus);