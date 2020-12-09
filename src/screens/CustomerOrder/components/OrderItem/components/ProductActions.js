import React, { memo } from 'react';

import { ModalService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const { status } = data;

  const onPressRate = () => {
    ModalService.showModal('RateBreeder', { ...data });
  };

  return (
    status === 'sold'
      ?
        (
          <Block marginTop={1} alignSelf='flex-start'>
            <Button size='small' status='primary' onPress={onPressRate}>
              Rate Breeder
            </Button>
          </Block>
        )
      : []
  );

}

export default memo(ProductActions);