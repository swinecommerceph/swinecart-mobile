import React, { memo } from 'react';

import { ModalService } from 'services';

import { Block, Button } from 'atoms';

function ProductActions({ data }) {

  const onPressPrimaryAction = () => {
    ModalService.showModal('RateBreeder', { ...data });
  };

  return (
    <Block marginTop={1} alignSelf='flex-start'>
      <Button size='small' status='primary' onPress={onPressPrimaryAction}>
        Rate Breeder
      </Button>
    </Block>
  );

}

export default memo(ProductActions);