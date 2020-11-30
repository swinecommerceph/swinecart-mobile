import React, { memo } from 'react';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const onPressEdit = () => {
    NavigationService.navigate('ProductForm', { mode: 'edit', id: data.id });
  };

  const onPressView = () => {
    NavigationService.navigate('ProductView', { id: data.id });
  };

  const onPressDelete = () => {
    ModalService.showModal('DeleteProduct', { product: data });
  };

  return (
    <Block flex={1} marginTop={0.5}>
      <Block alignSelf='flex-start'>
        <Button size='tiny' status='primary' onPress={onPressView}>
          View Details
        </Button>
      </Block>
      <Block row marginTop={0.5}>
        <Block marginRight={0.5}>
          <Button size='tiny' appearance='outline' status='info' onPress={onPressEdit}>
            Edit Details
          </Button>
        </Block>
        <Block>
          <Button size='tiny' appearance='outline' status='danger' onPress={onPressDelete}>
            Delete
        </Button>
        </Block>
      </Block>
    </Block>
  );

}

export default memo(ProductActions);