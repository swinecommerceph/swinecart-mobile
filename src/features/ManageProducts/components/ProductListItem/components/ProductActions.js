import React, { memo } from 'react';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const onPressEdit = () => {
    NavigationService.navigate('ProductForm', { mode: 'edit' });
  };

  const onPressView = () => {
    NavigationService.navigate('ProductView', { id: data.id });
  };

  const onPressDelete = () => {
    ModalService.showModal('DeleteProduct', { product: data });
  };

  return (
    <Block flex={1} marginTop={0.5}>
      <Button size='tiny' status='basic' onPress={onPressView}>
        View Info
      </Button>
      <Button size='tiny' status='primary' onPress={onPressEdit} marginTop={0.5}>
        {data.status === 'hidden' ? 'Display' : 'Hide'}
      </Button>
      <Block flex={1} row marginTop={0.5}>
        <Block flex={1} marginRight={0.5}>
          <Button size='tiny' appearance='outline' status='info' onPress={onPressEdit}>
            Edit
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' appearance='outline' status='danger' onPress={onPressDelete}>
            Delete
        </Button>
        </Block>
      </Block>
    </Block>
  );

}

export default memo(ProductActions);