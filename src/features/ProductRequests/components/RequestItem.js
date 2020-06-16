import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreState } from 'easy-peasy';

import { ModalService } from 'services';

import { UserAvatar } from 'molecules';

import { Block, Text, Button } from 'atoms';


function RequestItem({ data }) {

  const currentProduct = useStoreState(state => state.orderRequests.currentProduct);

  const { customerProvince, customerName } = data;

  const onPressView = () => {
    ModalService.showModal('OrderDetails', { product: currentProduct, reservation: data });
  };

  const onPressReserve = () => {
    ModalService.showModal('ReserveProduct', { ...data });
  };

  return (
    <TouchableOpacity activeOpacity={0.50} onPress={onPressView}>
      <Block
        row padding center
        backgroundColor='white1'
        borderBottomWidth={1}
        borderBottomColor='gray1'
      >
        <UserAvatar userName={customerName} size={64} textSize={20} />
        <Block flex={1} marginLeft={1}>
          <Text
            semibold
            color='black1'
            size={16}
            numberOfLines={2}
            textAlign='left'
          >
            {customerName}
          </Text>
          <Text
            normal
            color='gray3'
            size={14}
            numberOfLines={2}
            textAlign='left'
          >
            {customerProvince}
          </Text>
          <Block alignSelf='flex-start'>
            <Button
              size='small'
              onPress={onPressReserve}
              marginTop={0.5}
            >
              Reserve
            </Button>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default memo(RequestItem, () => true);