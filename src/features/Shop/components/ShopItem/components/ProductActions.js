import React, { memo } from 'react';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const onPressAdd = () => {
    ModalService.showModal('AddToCart', { ...data });
  };

  const onPressView = () => {
    NavigationService.navigate('ProductView', { id: data.id });
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      <Button size='small' status='basic' onPress={onPressView}>
        View All Info
      </Button>
      <Button
        marginTop={0.5}
        onPress={onPressAdd}
        size='small'
        status='primary'
      >
        Add to SwineCart
      </Button>
    </Block>
  );

}

export default memo(ProductActions);