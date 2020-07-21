import React, { Fragment, memo, useEffect } from 'react';
import { HeaderBar, BackButton, TextArea, ContainerView, ProductInfo, ProductAvatar } from 'molecules';

const statusTexts = {
  'requested': 'Requested',
  'reserved': 'Reserved',
  'on_delivery': 'On Delivery',
  'sold': 'Sold',
};

function Details({ order }) {

  const { id, status, statusTime } = order;

  return (
    <Fragment>
      <HeaderBar
        title='Order Details'
        accessoryLeft={BackButton}
      />
      <ContainerView flex={1} backgroundColor='gray9'>
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
            value={statusTime}
          />
        </DetailBlock>
        <DetailBlock>
          <DetailRow
            label='Breeder Name'
            value='PICC'
          />
          <DetailRow
            label='Province'
            value='Ilocos Norte'
          />
          <DetailRow
            label='Province'
            value='Ilocos Norte'
          />
        </DetailBlock>
        <DetailBlock>
          <DetailRow
            label='Quantity'
            value='50000'
          />
          <DetailRow
            label='Estimated Date of Delivery'
            value='July 2, 2010 (Saturday)'
          />
          <DetailRow
            label='Date Needed'
            value='July 2, 2010 (Saturday)'
          />
          <TextArea
            label='Special Request'
            disabled
            value='lorenlorenloren'
          />
        </DetailBlock>
      </ContainerView>
    </Fragment>
  );
}

export default memo(Details);