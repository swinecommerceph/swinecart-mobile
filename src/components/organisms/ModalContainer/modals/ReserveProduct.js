import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function ReserveProduct(props) {

  // Props
  const { data, hideModal } = props;
  const { customerName } = data;

  const reserveProduct = useStoreActions(actions => actions.reservations.reserveProduct);
  const currentProduct = useStoreState(state => state.orderRequests.currentProduct);

  const onPressPrimaryAction = () => {
    hideModal();
    reserveProduct(data);
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding>
        <Text normal size={18} textAlign='center'>
          Reserve
          <Text bold size={18} textAlign='center'>
            {` ${currentProduct.name} `}
          </Text>
          to
          <Text bold size={18} textAlign='center'>
            {` ${customerName}`}
          </Text>
          ?
        </Text>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='primary' onPress={onPressPrimaryAction}>
            Yes, reserve it
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(ReserveProduct);