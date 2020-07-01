import React, { memo } from 'react';

import { NavigationService } from 'services';

import { Block, Button, Text } from 'atoms';

import { formatDateNeeded, formatDeliveryDate } from 'utils/formatters';

function OrderDetails (props) {

  // Props
  const { data, hideModal } = props;
  const { product, reservation } = data;
  const { type } = product;
  const { customerName, dateNeeded, deliveryDate, quantity, specialRequest } = reservation;

  const onPressPrimaryAction = () => {
    hideModal();
    NavigationService.navigate('InboxStack');
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block center left padding={1} >
        <Text bold size={20}>Order Details</Text>
      </Block>
      <Block padding>
        <Block row>
          <Text semibold size={14} color='gray3' >Customer Name: </Text>
          <Text semibold size={14}>{customerName}</Text>
        </Block>
        <Block row>
          <Text semibold size={14} color='gray3' >Quantity: </Text>
          <Text semibold size={14}>{quantity}</Text>
        </Block>
        {
          type === 'semen' &&
          <Block row>
            <Text semibold size={14} color='gray3' >Date Needed: </Text>
            <Text semibold size={14}>{formatDateNeeded(dateNeeded)}</Text>
          </Block>
        }
        {
          deliveryDate &&
          <Block row>
            <Text semibold size={14} color='gray3' >Delivery Date: </Text>
            <Text semibold size={14}>{formatDeliveryDate(deliveryDate)}</Text>
          </Block> 
        }
        <Block>
          <Text semibold size={14} color='gray3' >Special Request: </Text>
          <Text semibold size={14} textAlign='auto'>{specialRequest}</Text>
        </Block>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny'  status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' onPress={onPressPrimaryAction}>
            Message
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(OrderDetails);