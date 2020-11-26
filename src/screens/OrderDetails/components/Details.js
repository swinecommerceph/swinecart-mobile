import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { TextArea, ContainerView } from 'molecules';
import { formatStatusTime, formatDateNeeded } from 'utils/formatters';

const statusTexts = {
  'requested': 'Requested',
  'reserved': 'Reserved',
  'on_delivery': 'On Delivery',
  'sold': 'Sold',
};

import DetailBlock from './DetailBlock';
import DetailRow from './DetailRow';

function Details({ status, statusTime }) {

  const order = useStoreState(state => state.orderDetails.data);

  const { id, breederInfo, details } = order;

  // console.dir(order);

  return (
    <Fragment>
      <ContainerView flex={1} backgroundColor='white1'>
        <DetailBlock>
          <DetailRow
            label='Order No.'
            value={id}
          />
          <DetailRow
            label='Status'
            value={statusTexts[status]}
          />
          <DetailRow
            label='Last Updated'
            value={formatStatusTime(statusTime)}
          />
        </DetailBlock>
        <DetailBlock>
          <DetailRow
            label='Breeder Name'
            value={breederInfo.name}
          />
          <DetailRow
            label='Province'
            value={breederInfo.province}
          />
          <DetailRow
            label='Landline Number'
            value={breederInfo.landlineNumber}
          />
          <DetailRow
            label='Mobile Number'
            value={breederInfo.mobileNumber}
          />
        </DetailBlock>
        <DetailBlock>
          <DetailRow
            label='Quantity'
            value={details.quantity}
          />
          {
            details.deliveryDate &&
            <DetailRow
              label='Estimated Date of Delivery'
              value={formatDateNeeded(details.deliveryDate)}
            />
          }
          {
            details.dateNeeded &&
            <DetailRow
              label='Date Needed'
              value={formatDateNeeded(details.dateNeeded)}
            />
          }
          <TextArea
            label='Special Request'
            disabled
            value={details.specialRequest}
          />
        </DetailBlock>
      </ContainerView>
    </Fragment>
  );
}

export default memo(Details);