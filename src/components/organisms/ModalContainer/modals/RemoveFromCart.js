import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function RemoveFromCart(props) {

  const removeFromCart = useStoreActions(actions => actions.cart.removeFromCart);

  // Props
  const { data, hideModal } = props;
  const { id: cartItemId, product } = data;
  const { name } = product;

  const onPressPrimaryAction = () => {
    removeFromCart(cartItemId);
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding={1}>
        <Text normal size={18} textAlign='center'>
          Are you sure you want to remove this Product from your SwineCart?
        </Text>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='basic' onPress={onPressPrimaryAction}>
            Yes, remove
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='info' onPress={onPressClose}>
            No, keep it
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(RemoveFromCart);