import React, { memo } from 'react';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const { status, product, reservationDetails } = data;

  const onPressRate = () => {
    ModalService.showModal('RateBreeder', { ...data });
  };

  const onPressView = () => {
    NavigationService.navigate('OrderDetails', { order: data });
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      {
        status === 'sold'
        ?
          (
            <Button size='small' status='primary' onPress={onPressRate}>
              Rate Breeder
            </Button>
          )
        :
          (
            <Button size='small' status='basic' onPress={onPressView}>
              View Order Details
            </Button>
          )
      }
    </Block>
  );

}

export default memo(ProductActions);