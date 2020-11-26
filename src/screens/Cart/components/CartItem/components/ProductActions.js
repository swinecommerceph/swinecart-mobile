import React, { memo, Fragment } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {
  
  const { product } = data;
  const { isDeleted } = product;

  const onPressRequest = () => {
    NavigationService.navigate('RequestProduct', { ...data });
  };

  const onPressRemove = () => {
    ModalService.showModal('RemoveFromCart', { ...data });
  };

  const onPressViewInfo = () => {
    NavigationService.navigate('ProductView', { id: product.id });
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      {
        !isDeleted && 
        <Fragment>
          <Button size='small' status='basic' onPress={onPressViewInfo}>
            View All Info
          </Button>
          <Block row marginTop={1}>
            <Button size='small' status='primary' onPress={onPressRequest} marginRight={0.5}>
              Request
            </Button>
            <Button size='small' status='basic' appearance='outline' onPress={onPressRemove}>
              Remove
            </Button>
          </Block>
        </Fragment>
      }
      {
        isDeleted &&
        <Button size='small' status='basic' appearance='outline' onPress={onPressRemove}>
          Remove
        </Button>
      }
    </Block>
  );

}

export default memo(ProductActions);