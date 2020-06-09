import React, { Fragment, memo, useEffect, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Calendar, Datepicker } from '@ui-kitten/components';
import addYears from 'date-fns/addYears';

import { Block, Button, Text } from 'atoms';
import { Stepper, TextArea, ContainerView } from 'molecules';

function RequestProduct({ data }) {
  
  const requestItem = useStoreActions(
    actions => actions.customerOrders.requestItem
  );

  const today = new Date();
  const [currentQuantity, setQuantity] = useState(2);
  const [currentDate, setDate] = useState(today);
  const [currentRequest, setRequest] = useState('');

  const { id: cartItemId, product } = data;
  const { name, type } = product;

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
        backgroundColor='white1'
        padding={1}
        showsVerticalScrollIndicator={true}
      >
          <Block padding={1}>
            <Text normal size={18} textAlign='center'>
              Requesting
              <Text bold size={18} textAlign='center'>
                {` ${name} `}
              </Text>
              sends a request to the breeder for buying the product.
            </Text>
          </Block>
          <Block>
            {
              type === 'semen' &&
              <Fragment>
                <Block row marginVertical={0.5} flex={1} padding={0.5}>
                  <Block middle>
                    <Text bold size={14} textAlign='left' middle>
                      Quantity: {currentQuantity}
                    </Text>
                  </Block>
                  <Block marginLeft={0.5} center>
                    <Stepper
                      onValueChange={setQuantity}
                      stepValue={2}
                      minValue={2}
                      initialValue={currentQuantity}
                    />
                  </Block>
                </Block>
                <Block marginBottom={0.5}>
                  <Datepicker
                    label={'Date Needed'}
                    date={currentDate}
                    onSelect={onChangeDate}
                  />
                </Block>
              </Fragment>
            }
            <Block marginBottom={0.5}>
              <TextArea
                label='Special Request'
                value={currentRequest}
                onChangeText={setRequest}
              />
            </Block>
          </Block>
          <Block row center right padding={1}>
            <Block flex={1}>
              <Button size='tiny' status='info' onPress={onPressPrimaryAction}>
                Request
              </Button>
            </Block>
          </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(RequestProduct, () => true);