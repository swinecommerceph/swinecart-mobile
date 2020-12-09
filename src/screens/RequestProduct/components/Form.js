import React, { Fragment, memo, useState } from 'react';
import { Dimensions } from 'react-native';
import { useStoreActions } from 'easy-peasy';
import { Calendar } from '@ui-kitten/components';

import { formatDeliveryDate } from 'utils/formatters';

import { Stepper, TextArea, ContainerView } from 'molecules';
import { Block, Button, Text } from 'atoms';

import ProductDetails from './ProductDetails';

const screenWidth = Math.round(Dimensions.get('window').width);

function Form({ data }) {

  const requestItem = useStoreActions(
    actions => actions.customerOrders.requestItem
  );

  const today = new Date();
  const [currentQuantity, setQuantity] = useState(2);
  const [currentDate, setDate] = useState(today);
  const [currentRequest, setRequest] = useState('');

  const { id: cartItemId, product } = data;
  const { type } = product;

  console.log('Product:', product);

  const onPressPrimaryAction = () => {
    requestItem({
      cartItemId, type, currentQuantity, currentDate, currentRequest
    });
  };

  const onChangeDate = date => {
    setDate(date);
  };

  // formatDeliveryDate(currentDate)
  // Estimated Date of Delivery

  return (
    <ContainerView
      showsVerticalScrollIndicator={true}
      backgroundColor='white1'
      paddingHorizontal={1}
    >
      <ProductDetails product={product} />
        {
          type === 'semen' &&
          <Fragment>
            <Block row center marginBottom={1}>
              <Text bold size={14} textAlign='left'>
                Quantity: {currentQuantity}
              </Text>
              <Block marginLeft={2}>
              </Block>
            </Block>
            <Block marginBottom={1}>
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
    </ContainerView>
  );
}

export default memo(Form);