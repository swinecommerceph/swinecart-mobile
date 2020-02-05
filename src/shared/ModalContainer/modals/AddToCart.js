import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function AddToCart(props) {

  const addToCart = useStoreActions(actions => actions.cart.addToCart);

  // Props
  const { data, hideModal } = props;
  const {
    id, name
  } = data;

  const onPressPrimaryAction = () => {
    addToCart(id);
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding={1}>
        <Text normal size={18} textAlign='center'>
          Are you sure you want to add product:
          <Text bold size={18} textAlign='center'>
            {` ${name} `}
          </Text>
          to your SwineCart?
        </Text>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='info' onPress={onPressPrimaryAction}>
            Yes, add it
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(AddToCart);