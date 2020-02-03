import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Block from '../../Block';
import Button from '../../Button';
import Text from '../../Text';

function ConfirmSold(props) {

  // Props
  const { data, hideModal } = props;
  const { product, reservation } = data;
  const { name } = product;
  const { customerName } = reservation;

  const confirmSold = useStoreActions(actions => actions.reservations.confirmSold);

  const onPressPrimaryAction = () => {
    confirmSold({ product, reservation });
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding>
        <Text normal size={18} textAlign='center'>
          Confirm that the product:
          <Text bold size={18} textAlign='center'>
            {` ${name} `}
          </Text>
          was sold to
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
          <Button size='tiny' status='info' onPress={onPressPrimaryAction}>
            Yes, it is sold
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(ConfirmSold);