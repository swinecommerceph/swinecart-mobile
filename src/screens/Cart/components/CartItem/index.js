import React, { memo } from 'react';

import { NavigationService } from 'services';

import {
  Card,
  ProductInfo,
  ProductAvatar,
  MessageBox,
} from 'molecules';
import { Block } from 'atoms';

import {
  CardActions
} from './components';

function CartItem({ data }) {

  const { product } = data;

  const {
    id, imageUrl, name, type, breed, age, breederName, farmLocation, isDeleted
  } = product;

  const onPress = () => {
    NavigationService.navigate('ProductView', { id });
  };

  return (
    <Card
      isPressable={true}
      onPress={onPress}
    >
      <ProductAvatar
        shape='rounded'
        image={imageUrl}
        size={96}
        type={type}
      />
      <Block flex={1} marginLeft={1}>
        <ProductInfo
          name={name}
          type={type}
          age={age}
          breed={breed}
          breederName={breederName}
          farmLocation={farmLocation}
        />
        {
          isDeleted
            ?
              (
                <MessageBox
                  marginTop={1}
                  status='info'
                  message='This product has been deleted by the Breeder.'
                />
              )
            : []
        }
        <CardActions data={data} />
      </Block>
    </Card>
  );

}

export default memo(CartItem);