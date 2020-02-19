import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const setCurrentId = useStoreActions(actions => actions.productDetails.setCurrentId);

  const onPressAdd = () => {
    ModalService.showModal('AddToCart', { ...data });
  };

  const onPressView = () => {
    setCurrentId(data.id);
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      <Button size='small' status='basic' onPress={onPressView}>
        View All Info
      </Button>
      <Button size='small' status='primary' onPress={onPressAdd} marginTop={0.5}>
        Add to SwineCart
      </Button>
    </Block>
  );

}

export default memo(ProductActions);