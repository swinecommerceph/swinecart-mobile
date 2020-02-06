import React, { memo, useState, Fragment } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Calendar } from '@ui-kitten/components';
import addYears from 'date-fns/addYears';

import { Block, Button, Text } from 'atoms';
import { Stepper, TextArea } from 'molecules';

import { formatDeliveryDate } from 'utils/formatters';

function RequestProduct(props) {

  const requestItem = useStoreActions(actions => actions.customerOrders.requestItem);

  const today = new Date();
  const [currentQuantity, setQuantity] = useState(2);
  const [currentDate, setDate] = useState(today);
  const [currentRequest, setRequest] = useState('');

  // Props
  const { data, hideModal } = props;
  const { id: cartItemId, product } = data;
  const { name, type } = product;

  const onPressPrimaryAction = () => {
    requestItem({ cartItemId, type, currentQuantity, currentDate, currentRequest });
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  const onChangeDate = date => {
    setDate(date);
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
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
        <Block flex={1} marginRight={1}>
          <Button size='tiny' status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='info' onPress={onPressPrimaryAction}>
            Yes, request
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(RequestProduct, () => true);