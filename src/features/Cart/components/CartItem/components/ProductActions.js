import React, { memo, useMemo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, Button, Text } from 'shared';

function ProductActions({ data }) {

  const { product } = data;
  const { isDeleted } = product;

  const onPressPrimaryAction = () => {
    ModalService.showModal('RequestProduct', { ...data });
  };

  const onPressCancel = () => {
    ModalService.showModal('RemoveFromCart', { ...data });
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      {
        !isDeleted && 
        <Button size='small' status='primary' onPress={onPressPrimaryAction}>
          Request Product
        </Button>
      }
      <Button size='small' status='primary' appearance='outline' onPress={onPressCancel} marginTop={isDeleted ? 0 : 0.5}>
        Remove From Cart
      </Button>
    </Block>
  );

}

export default memo(ProductActions);