import React, { Fragment, memo } from 'react';
import { formatStatusTime } from 'utils/formatters';
import { Text } from 'atoms';

const statusTexts = {
  'requested': 'Requested',
  'reserved': 'Reserved',
  'on_delivery': 'On Delivery',
  'sold': 'Sold',
};

function OrderStatus({ status, statusTime }) {
  return (
    <Fragment>
      <Text bold size={14} color='black1' marginBottom={0.25} marginTop={1}>
        {`${statusTexts[status]} on`}
      </Text>
      <Text normal color='gray3' size={14}>
        {formatStatusTime(statusTime)}
      </Text>
    </Fragment>
  );
}

export default memo(OrderStatus);