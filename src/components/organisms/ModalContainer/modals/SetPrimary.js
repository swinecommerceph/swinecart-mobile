import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function SetPrimary(props) {

  // Props
  const { data, hideModal } = props;
  const { id } = data;

  const setPrimary = useStoreActions(
    actions => actions.productMedia.setPrimary
  );

  const onPressPrimaryAction = () => {
    setPrimary(id);
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding={1}>
        <Text normal size={18} textAlign='center'>
          Set this photo as primary photo?
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
            Yes, Set this
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(SetPrimary);