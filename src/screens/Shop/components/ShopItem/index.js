import React, { memo } from 'react';

import { NavigationService } from 'services';

import {
  Card,
  ProductInfo,
  ProductAvatar,
} from 'molecules';
import { Block } from 'atoms';

import { CardActions } from './components';

function ShopItem({ data }) {

  const {
    id, imageUrl, name, type, breed, age, breederName, farmLocation
  } = data;

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
        size={112}
        type={type}
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
        <CardActions data={data} />
      </Block>
    </Card>
  );

}

export default memo(ShopItem);