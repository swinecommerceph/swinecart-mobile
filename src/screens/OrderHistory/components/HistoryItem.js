import React, { memo } from 'react';

import { NavigationService } from 'services';

import {
  Card,
  ProductInfo,
  ProductAvatar
} from 'molecules';

import { Block } from 'atoms';

function HistoryItem({ data }) {

  const { product, id } = data;

  const {
    imageUrl, name, type, breed, age, breederName, farmLocation
  } = product;

  const onPress = () => {
    NavigationService.navigate('OrderDetails', { order: data });
  };

  return (
    <Card
      isPressable={true}
      onPress={onPress}
    >
      <ProductAvatar
        shape='rounded'
        image={imageUrl}
        type={type}
        size={80}
      />
      <Block marginLeft={1}>
        <ProductInfo
          name={name}
          type={type}
          age={age}
          breed={breed}
          breederName={breederName}
          farmLocation={farmLocation}
        />
      </Block>
    </Card>
  );

}

export default memo(HistoryItem);