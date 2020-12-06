import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function DeleteFarm(props) {

  // Props
  const { data, hideModal } = props;
  const { id } = data;

  const deleteFarm = useStoreActions(
    actions => actions.farms.deleteFarm
  );

  const onPressPrimaryAction = () => {
    deleteFarm(id);
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding={1}>
        <Text normal size={18} textAlign='center'>
          Are you sure you want to remove this farm?
        </Text>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny'  status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='primary' onPress={onPressPrimaryAction}>
            Yes, remove it
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(DeleteFarm);