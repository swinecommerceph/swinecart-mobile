import React, { Fragment, memo, useState } from 'react';
import { useStoreActions } from 'easy-peasy';

import { formatDeliveryDate } from 'utils/formatters';

import {
  Stepper,
  Calendar,
  TextArea,
  ContainerView,
  TextGroup,
} from 'molecules';

import {
  Block,
  Button
} from 'atoms';

import ProductDetails from './ProductDetails';

function Form({ data }) {

  const requestItem = useStoreActions(
    actions => actions.customerOrders.requestItem
  );

  const today = new Date();
  const [quantity, setQuantity ] = useState(0);
  const [date, setDate] = useState(today);
  const [specialRequest, setSpecialRequest] = useState(null);

  const { id: cartItemId, product } = data;
  const { type, isUnique } = product;

  const onPressPrimaryAction = () => {
    requestItem({
      cartItemId,
      type,
      quantity,
      date,
      specialRequest,
      isUnique,
    });
  };

  const onSelect = date => setDate(date);

  return (
    <ContainerView
      showsVerticalScrollIndicator={true}
      backgroundColor='white1'
    >
      <ProductDetails product={product} />
        {
          type === 'semen'
            ?
              (
                <Fragment>
                  <Block row center>
                    <TextGroup
                      hasBorder={false}
                      label='Quantity'
                      data={quantity}
                    />
                    <Block paddingHorizontal={1}>
                      <Stepper
                        step={2}
                        maxValue={50000}
                        minValue={2}
                        value={quantity}
                        setValue={setQuantity}
                      />
                    </Block>
                  </Block>
                  <Block>
                    <TextGroup
                      hasBorder={false}
                      label='Estimated Date of Delivery'
                      data={formatDeliveryDate(date)}
                    />
                    <Block center >
                      <Calendar
                        date={date}
                        onSelect={onSelect}
                        min={today}
                      />
                    </Block>
                  </Block>
                </Fragment>
              )
            : []
        }
        {
          !isUnique
            ?
              (
                <Block row center>
                  <TextGroup
                    hasBorder={false}
                    label='Quantity'
                    data={quantity}
                  />
                  <Block paddingHorizontal={1}>
                    <Stepper
                      step={1}
                      maxValue={50000}
                      minValue={1}
                      value={quantity}
                      setValue={setQuantity}
                    />
                  </Block>
                </Block>
              )
            : []
        }
        <Block marginTop={1} paddingHorizontal={1}>
          <TextArea
            label='Special Request'
            value={specialRequest}
            onChangeText={setSpecialRequest}
          />
        </Block>
        <Block row center marginTop={1} paddingHorizontal={1}>
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