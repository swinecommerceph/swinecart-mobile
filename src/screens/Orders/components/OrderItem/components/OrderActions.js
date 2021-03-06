import React, { memo } from 'react';

import { NavigationService, ModalService } from 'services';

import { Button, Block } from 'atoms';

function OrderActions(props) {

  const { status, product, reservation } = props;

  const onPressView = () => {
    NavigationService.navigate('ProductRequests', { product });
  };

  const onPressPrimaryAction = () => {
    if (status === 'reserved') {
      NavigationService.navigate('SendProduct', { product, reservation });
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
        <Button size='small' status='basic' onPress={onPressCancel} marginTop={0.5}>
          Cancel Transaction
        </Button>
      </Block>
    )
  }

  else {
    return null;
  }
}

export default memo(OrderActions);