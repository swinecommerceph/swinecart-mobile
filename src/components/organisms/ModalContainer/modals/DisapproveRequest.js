import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function ReserveProduct(props) {

  // Props
  const { data, hideModal } = props;
  const { customerName } = data;

  const disapproveRequest = useStoreActions(actions => actions.reservations.disapproveRequest);
  const currentProduct = useStoreState(state => state.requests.currentProduct);

  const onPressPrimaryAction = () => {
    hideModal();
    disapproveRequest(data);
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding>
        <Text normal size={18} textAlign='center'>
          Disapprove this request?
        </Text>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='primary' onPress={onPressPrimaryAction}>
            Disapprove
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(ReserveProduct);