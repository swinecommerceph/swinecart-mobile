import React, { memo } from 'react';

import { ModalService } from 'services';

import { Block, Button } from 'atoms';

function CardActions({ data }) {

  const onPressAdd = () => {
    ModalService.showModal('AddToCart', { ...data });
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      <Button
        onPress={onPressAdd}
        size='small'
        status='primary'
      >
        Add to SwineCart
      </Button>
    </Block>
  );

}

export default memo(CardActions);