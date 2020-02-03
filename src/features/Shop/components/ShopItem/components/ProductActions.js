import React, { memo, useMemo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'shared';

function ProductActions({ data }) {

  const onPressAdd = () => {
    ModalService.showModal('AddToCart', { ...data });
  };

  const onPressView = () => {
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      <Button size='small' status='basic' apperance='ghost' onPress={onPressView}>
        View All Info
      </Button>
      <Button size='small' onPress={onPressAdd} marginTop={0.5}>
        Add to Cart
      </Button>
    </Block>
  );

}

export default memo(ProductActions);