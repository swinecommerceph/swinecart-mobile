import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function CancelTransaction(props) {

  // Props
  const { data, hideModal } = props;
  const { status, product, reservation } = data;
  const { name } = product;
  const { customerName } = reservation;

  const cancelTransaction = useStoreActions(actions => actions.reservations.cancelTransaction);

  const onPressPrimaryAction = () => {
    cancelTransaction({ product, reservation, status });
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding>
        <Text normal size={18} textAlign='center'>
          Are you sure you want to cancel transaction on product:
          <Text bold size={18} textAlign='center'>
            {` ${name} `}
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
          <Button size='tiny' status='danger' onPress={onPressPrimaryAction}>
            Yes, cancel
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(CancelTransaction);