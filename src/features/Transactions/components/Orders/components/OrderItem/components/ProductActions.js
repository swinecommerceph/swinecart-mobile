import React, { memo, useMemo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { ModalService, NavigationService } from 'services';

import { Block, Button } from 'shared';

function ProductActions() {

  const onPressPrimaryAction = () => {
    ModalService.showModal('RateBreeder', {});
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