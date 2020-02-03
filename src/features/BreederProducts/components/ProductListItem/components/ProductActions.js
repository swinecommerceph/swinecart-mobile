import React, { memo, useMemo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, IconButton, Button } from 'shared';

function ProductActions({ data, listIndex }) {
  
  const {  status } = data;

  const toggle = useStoreActions(actions => actions.products.updateVisibility);
  

  const eyeIconName = useMemo(() => {

    if (status === 'hidden') {
      return 'eye';
    }
    else {
      return 'eye-off';
    } 

  }, [ status ]);

  const onPressEdit = () => {
    // NavigationService.navigate('EditProduct');
  };
  const onPressToggle = () => {
    toggle(listIndex);
  };

  const onPressDelete = () => {
    ModalService.showModal('DeleteProduct', { product: data });
  };


  return (
    <Block marginTop={0.5} alignSelf='flex-start'>
      <Button size='small' status='primary' onPress={null}>
        View More Info
      </Button>
      <Block row marginTop={1}>
        <Button size='small' status='primary' appearance='outline' onPress={onPressDelete} marginRight={0.5}>
          Delete
        </Button>
        <Button size='small' status='primary' appearance='outline' onPress={onPressEdit}>
          Edit
        </Button>
      </Block>
    </Block>
  );

}

export default memo(ProductActions);