import React, { memo, useState } from 'react';
import { Calendar } from '@ui-kitten/components';
import { useStoreActions } from 'easy-peasy';
import addDays from 'date-fns/addDays';

import Block from '../../Block';
import Button from '../../Button';
import Text from '../../Text';

import { formatDeliveryDate } from 'utils/formatters';

import { colors } from 'constants/theme';

const today = new Date();

function SendProduct(props) {

  const [currentDate, setCurrentDate] = useState(addDays(today, 5));
  const sendForDelivery = useStoreActions(actions => actions.reservations.sendForDelivery);

  // Props
  const { data, hideModal } = props;
  const { product, reservation } = data;
  const { name } = product;
  const { customerName } = reservation;

  const onSelect = date => {
    console.dir(date);
    setCurrentDate(date);
  };

  const onPressPrimaryAction = () => {
    hideModal();
    sendForDelivery({ 
      deliveryDate: currentDate,
      product, reservation 
    });
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block center padding>
        <Block center middle>
          <Text bold size={18} textAlign='center'>
            Deliver {name} to {customerName}?
          </Text>
          <Text normal size={15} textAlign='center'>
            Product will be delivered on or before
          </Text>
          <Text bold size={15} textAlign='center'>
            {formatDeliveryDate(currentDate)}
          </Text>
        </Block>
        <Block padding={1} marginVertical={1}>
          <Calendar 
            date={currentDate}
            onSelect={onSelect}
            min={today}
            max={addDays(today, 100)}
            boundingMonth={false}
          />
        </Block>
      </Block>
      <Block row center right padding={1}>
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='basic' onPress={onPressClose}>
            Cancel
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' onPress={onPressPrimaryAction}>
            Delivery
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(SendProduct);