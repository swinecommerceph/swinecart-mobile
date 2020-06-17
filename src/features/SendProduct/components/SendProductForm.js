import React, { useState, memo } from 'react';
import { Dimensions } from "react-native";
import { useStoreActions } from 'easy-peasy';
import addDays from 'date-fns/addDays';
import { Calendar } from '@ui-kitten/components';

import { formatDateNeeded } from 'utils/formatters';

import { ContainerView } from 'molecules';
import { Block, Text, Button } from 'atoms';

const screenWidth = Math.round(Dimensions.get('window').width);

function Container({ product, orderDetails }) {

  const today = new Date();

  const { type } = product;
  const { 
    customerName, dateNeeded, quantity, specialRequest 
  } = orderDetails;

  const [currentDate, setCurrentDate] = useState(addDays(today, 5));
  
  const sendForDelivery = useStoreActions(
    actions => actions.reservations.sendForDelivery
  );
    
  const onSelect = date => {
    setCurrentDate(date);
  };
    
  const onPressSubmit = () => {
    sendForDelivery({
      deliveryDate: currentDate,
      product,
      reservation: orderDetails
    });
  };

  return (
    <ContainerView
      showsVerticalScrollIndicator={true}
      backgroundColor='white1'
      padding={1}
    >
      <Block flex={1}>
        <Block flex={1} row space='between' marginBottom={0.25}>
          <Block flex={1}>
            <Text bold size={14} textAlign='left' color='gray8'>Customer Name</Text>
          </Block>
          <Block flex={1}>
            <Text bold size={14} textAlign='center' numberOfLines={3}>{customerName}</Text>
          </Block>
        </Block>
        <Block flex={1} row space='between' marginBottom={0.25}>
          <Block flex={1}>
            <Text bold size={14} textAlign='left' color='gray8'>Quantity</Text>
          </Block>
          <Block flex={1}>
            <Text bold size={14} textAlign='center'>{quantity}</Text>
          </Block>
        </Block>
        {
          type === 'semen' &&
          <Block flex={1} row space='between' marginBottom={0.25}>
            <Block flex={1}>
              <Text bold size={14} textAlign='left' color='gray8'>Date Needed</Text>
            </Block>
            <Block flex={1}>
              <Text bold size={14} textAlign='center'>{formatDateNeeded(dateNeeded)}</Text>
            </Block>
          </Block>
        }
        <Block flex={1} space='between' marginBottom={0.25}>
          <Block flex={1}>
            <Text bold size={14} textAlign='left' color='gray8'>Special Request</Text>
          </Block>
          <Block flex={1}>
            <Text bold size={14} textAlign='center' numberOfLines={3}>{specialRequest}</Text>
          </Block>
        </Block>
      </Block>
      <Block flex={1} center marginTop={1}>
        <Calendar
          date={currentDate}
          onSelect={onSelect}
          min={today}
          max={addDays(today, 100)}
          boundingMonth={false}
          style={{ width: screenWidth - 32, minWidth: screenWidth - 32 }}
        />
      </Block>
      <Block flex={1} row center marginTop={1}>
        <Block flex={1}>
          <Button size='small' onPress={onPressSubmit}>
            Submit
          </Button>
        </Block>
      </Block>
    </ContainerView>
  );
}

export default memo(Container);