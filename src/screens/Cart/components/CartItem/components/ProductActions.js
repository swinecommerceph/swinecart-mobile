import React, { memo, Fragment } from 'react';

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
  return (
    <Block marginTop={1} alignSelf='flex-start'>
      {
        !isDeleted
          ? (
              <Fragment>
                <Block>
                  <Button
                    size='small'
                    status='primary'
                    onPress={onPressRequest}
                    marginBottom={0.5}
                  >
                    Request Product
                  </Button>
                  <Button
                    size='small'
                    status='basic'
                    onPress={onPressRemove}
                  >
                    Remove
                  </Button>
                </Block>
              </Fragment>
            )
          :
            (
              <Block>
                <Button size='small' status='basic' onPress={onPressRemove}>
                  Remove
                </Button>
              </Block>
            )
      }
    </Block>
  );

}

export default memo(ProductActions);