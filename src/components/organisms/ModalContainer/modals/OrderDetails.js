import React, { memo } from 'react';
import { Divider } from '@ui-kitten/components';
import { useStoreState } from 'easy-peasy';
import { NavigationService } from 'services';

import { TextArea } from 'molecules';
import { Text, Block, Button } from 'atoms';

import { formatDateNeeded, formatDeliveryDate } from 'utils/formatters';

function OrderDetails (props) {

  const accountType = useStoreState(state => state.user.accountType);

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
      <Block center left padding={1}>
        <Text bold size={18}>Order Details</Text>
      </Block>
      <Divider />
      <Block padding={1}>
        {
          accountType === 'Breeder' &&
          (
            <Block row>
              <Text semibold size={12} color='gray8'>Customer Name: </Text>
              <Text semibold size={12}>{customerName}</Text>
            </Block>
          )
        }
        <Block row>
          <Text semibold size={12} color='gray8'>Quantity: </Text>
          <Text bold size={12}>{quantity}</Text>
        </Block>
        {
          type === 'semen' &&
          <Block row>
            <Text semibold size={12} color='gray8'>Date Needed: </Text>
            <Text semibold size={12}>{formatDateNeeded(dateNeeded)}</Text>
          </Block>
        }
        {
          deliveryDate &&
          <Block row>
            <Text semibold size={12} color='gray8'>Delivery Date: </Text>
            <Text semibold size={12}>{formatDeliveryDate(deliveryDate)}</Text>
          </Block> 
        }
        <Block marginTop={0.5}>
          <TextArea
            label='Special Request'
            value={specialRequest}
            disabled={true}
          />
        </Block>
      </Block>
      <Divider />
      <Block row center right padding={0.5}>
        <Block flex={1} marginRight={1}>
          <Button size='tiny' status='basic' onPress={onPressClose}>
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