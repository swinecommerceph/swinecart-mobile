import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Block from '../../Block';
import Button from '../../Button';
import Text from '../../Text';

function RequestProduct(props) {

  // Props
  const { data, hideModal } = props;
  const { id: cartItemId, product } = data;
  const { name } = product;

  const onPressPrimaryAction = () => {
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding={1}>
        <Text normal size={18} textAlign='center'>
          Requesting 
          <Text bold size={18} textAlign='center'>
            {` ${name} `}
          </Text>
          sends a request to the breeder for buying the product. 
        </Text>
      </Block>
      <Block padding={1}>
        <Block padding={1} backgroundColor='color-danger-100' borderRadius={5}>
          <Text semibold size={14} textAlign='center' color='danger'>
            Once requested, request quantity can never be changed.
          </Text>
        </Block>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='info' onPress={onPressPrimaryAction}>
            Yes, request
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(RequestProduct);