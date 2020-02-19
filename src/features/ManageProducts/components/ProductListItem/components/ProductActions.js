import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const setCurrentId = useStoreActions(actions => actions.productDetails.setCurrentId);

  const onPressEdit = () => {
    NavigationService.navigate('EditProduct');
  };

  const onPressView = () => {
    setCurrentId(data.id);
    NavigationService.navigate('ProductView');
  };

  const onPressDelete = () => {
    ModalService.showModal('DeleteProduct', { product: data });
  };

  return (
    <Block marginTop={0.5} alignSelf='flex-start'>
      <Button size='small' status='primary' onPress={onPressView}>
        View More Info
      </Button>
      <Block row marginTop={1}>
        <Button size='small' status='basic' onPress={onPressDelete} marginRight={0.5}>
          Delete
        </Button>
        {/* <Button size='small' status='basic' onPress={onPressEdit}>
          Edit
        </Button> */}
      </Block>
    </Block>
  );

}

export default memo(ProductActions);