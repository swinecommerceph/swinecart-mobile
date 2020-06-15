import React, { Fragment, memo, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Calendar } from '@ui-kitten/components';

import { Block, Button, Text } from 'atoms';
import { Stepper, TextArea, ContainerView } from 'molecules';

import ProductDetails from './ProductDetails';

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
                <Block marginBottom={0.5}>
                  <Text bold size={14} textAlign='left'>
                    Date Needed: 
                  </Text>
                </Block>
                <Block center>
                  <Calendar
                    date={currentDate}
                    onSelect={onChangeDate}
                    style={{ minWidth: 379 }}
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
              <Button size='tiny' status='info' onPress={onPressPrimaryAction}>
                Request
              </Button>
            </Block>
          </Block>
        </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(RequestProduct, () => true);