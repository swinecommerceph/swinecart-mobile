import React, { Fragment, memo, useEffect, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Calendar } from '@ui-kitten/components';
import addYears from 'date-fns/addYears';

import { Block, Button, Text, HeaderBar } from 'atoms';
import { Stepper, TextArea, ContainerView } from 'molecules';

import { formatDeliveryDate } from 'utils/formatters';

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
      <ContainerView showsVerticalScrollIndicator={true}>
        <Block backgroundColor='white1' flex={1}>
          <Block padding={1}>
            <Text normal size={16} textAlign='center'>
              Requesting
              <Text bold size={16} textAlign='center'>
                {` ${name} `}
              </Text>
              sends a request to the breeder for buying the product.
            </Text>
          </Block>
          <Block paddingHorizontal={1}>
            <Block marginBottom={0.5}>
              <TextArea
                label='Special Request'
                value={currentRequest}
                onChangeText={setRequest}
              />
            </Block>
            {
              type === 'semen' &&
              <Fragment>
                <Block>
                  <Block row justifyContent='center' alignContent='center'>
                    <Text bold size={14} textAlign='left'>
                      Quantity: {currentQuantity}
                    </Text>
                    <Block marginLeft={0.5}>
                      <Stepper
                        onValueChange={setQuantity}
                        stepValue={2}
                        minValue={2}
                        initialValue={currentQuantity}
                      />
                    </Block>
                  </Block>
                </Block>
                <Block>
                  <Block row marginBottom={1}>
                    <Text bold size={14} textAlign='left'>
                      Date Needed: {formatDeliveryDate(currentDate)}
                    </Text>
                  </Block>
                  <Calendar
                    date={currentDate}
                    onSelect={onChangeDate}
                    min={today}
                    max={addYears(today, 5)}
                  />
                </Block>
              </Fragment>
            }
          </Block>
          <Block row center right padding={1}>
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