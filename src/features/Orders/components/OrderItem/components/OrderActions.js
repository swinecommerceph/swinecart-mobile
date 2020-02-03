import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';
import { NavigationService, ModalService } from 'services';

import { Button, Block } from 'shared';

function OrderActions(props) {

  const { status, product, reservation } = props;

  const setCurrentProduct = useStoreActions(actions => actions.orderRequests.setCurrentProduct);
  const resetState = useStoreActions(actions => actions.orderRequests.resetState);

  const onPressView = () => {
    resetState();
    setCurrentProduct(product);
    NavigationService.navigate('ProductRequests');
  };

  const onPressPrimaryAction = () => {
    if (status === 'reserved') {
      ModalService.showModal('SendProduct', { product, reservation });
    }
    else {
      ModalService.showModal('ConfirmSold', { product, reservation });
    }
  };

  const onPressCancel = () => {
    ModalService.showModal('CancelTransaction', { product, reservation, status });
  };

  if (status === 'requested') {
    return (
      <Block marginTop={1} alignSelf='flex-start'>
        <Button size='small' onPress={onPressView}>
          View Requests
        </Button>
      </Block>
    );
  }

  else if (status === 'reserved' || status === 'onDelivery') {
    return (
      <Block marginTop={1} alignSelf='flex-start'>
        <Button size='small' onPress={onPressPrimaryAction}>
          { status === 'reserved' ? 'Send for Delivery' : 'Confirm Sold' }
        </Button>
        <Button size='small' status='danger' onPress={onPressCancel} marginTop={0.5}>
          Cancel Transaction
        </Button>
      </Block>
    )
  }

  else {
    return null;
  }
}

export default memo(OrderActions, () => true);