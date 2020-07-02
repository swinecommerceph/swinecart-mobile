import React, { memo } from 'react';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const onPressEdit = () => {
    NavigationService.navigate('EditProduct');
  };

  const onPressView = () => {
    NavigationService.navigate('ProductView', { id: data.id });
  };

  const onPressDelete = () => {
    ModalService.showModal('DeleteProduct', { product: data });
  };

  return (
    <Block marginTop={0.5} alignSelf='flex-start'>
      <Button size='tiny' status='primary' onPress={onPressView}>
        View More Info
      </Button>
      <Block row marginTop={0.5}>
        {/* <Button 
          size='small'
          status='basic'
          onPress={onPressEdit}
          marginRight={0.5}
        >
          Edit
        </Button> */}
        <Button size='tiny' status='basic' onPress={onPressDelete}>
          Delete
        </Button>
      </Block>
    </Block>
  );

}

export default memo(ProductActions);