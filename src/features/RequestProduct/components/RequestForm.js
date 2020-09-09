import React, { Fragment, memo, useState } from 'react';
import { Dimensions } from 'react-native';
import { useStoreActions } from 'easy-peasy';
import { Calendar } from '@ui-kitten/components';

import { formatDeliveryDate } from 'utils/formatters';

import { Stepper, TextArea, ContainerView } from 'molecules';
import { Block, Button, Text } from 'atoms';

import ProductDetails from './ProductDetails';

const screenWidth = Math.round(Dimensions.get('window').width);

function RequestProduct({ data }) {
  
  const requestItem = useStoreActions(
    actions => actions.customerOrders.requestItem
  );

  const today = new Date();
  const [currentQuantity, setQuantity] = useState(2);
  const [currentDate, setDate] = useState(today);
  const [currentRequest, setRequest] = useState('');

  const { id: cartItemId, product } = data;
  const { type } = product;

  const onPressPrimaryAction = () => {
    requestItem({
      cartItemId, type, currentQuantity, currentDate, currentRequest
    });
  };

  const onChangeDate = date => {
    setDate(date);
  };

  return (
    <Fragment>
      <ContainerView 
        showsVerticalScrollIndicator={true}
        backgroundColor='white1'
      >
        <Block padding={1}>
          <ProductDetails product={product} />
          {
            type === 'semen' &&
            <Fragment>
              <Block row center marginBottom={1}>
                <Text bold size={14} textAlign='left'>
                  Quantity: {currentQuantity}
                </Text>
                <Block marginLeft={2}>
                  <Stepper
                    onValueChange={setQuantity}
                    stepValue={2}
                    minValue={2}
                    initialValue={currentQuantity}
                  />
                </Block>
              </Block>
              <Block marginBottom={1}>
                <Block flex={1} row space='between' marginBottom={0.5}>
                  <Block flex={1}>
                    <Text bold size={12} textAlign='left' color='gray8'>Estimated Date of Delivery</Text>
                  </Block>
                  <Block flex={1}>
                    <Text bold size={12} textAlign='center' numberOfLines={3}>{formatDeliveryDate(currentDate)}</Text>
                  </Block>
                </Block>
                <Block center>
                  <Calendar
                    date={currentDate}
                    onSelect={onChangeDate}
                    style={{ width: screenWidth - 32, minWidth: screenWidth - 32 }}
                  />
                </Block>
              </Block>
            </Fragment>
          }
          <Block marginTop={1}>
            <TextArea
              label='Special Request'
              value={currentRequest}
              onChangeText={setRequest}
            />
          </Block>
          <Block row center marginTop={1}>
            <Block flex={1}>
              <Button size='small' onPress={onPressPrimaryAction}>
                Submit
              </Button>
            </Block>
          </Block>
        </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(RequestProduct, () => true);