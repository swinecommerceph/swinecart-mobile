import React, { memo, useMemo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, Button, Text } from 'atoms';
import { Fragment } from 'react';

function ProductActions({ data }) {

  const setCurrentId = useStoreActions(actions => actions.productDetails.setCurrentId);
  const { product } = data;
  const { isDeleted } = product;

  const onPressRequest = () => {
    ModalService.showModal('RequestProduct', { ...data });
  };

  const onPressRemove = () => {
    ModalService.showModal('RemoveFromCart', { ...data });
  };

  const onPressViewInfo = () => {
    setCurrentId(product.id);
    NavigationService.navigate('ProductView');
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