import React, { memo } from 'react';

import { NavigationService } from 'services';

import { Card, ProductInfo, ProductAvatar } from 'molecules';
import { Block, Button } from 'atoms';

function HistoryItem({ data }) {

  const { product, logs } = data;

  const {
    imageUrl, name, type, breed, age, breederName, farmLocation
  } = product;

  const onPressView = () => {
    NavigationService.navigate('HistoryDetails', { logs });
  };

  return (
    <Card>
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
        <Block marginTop={1} alignSelf='flex-start'>
          <Button size='small' status='basic' onPress={onPressView}>
            View Order Details
          </Button>
        </Block>
      </Block>
    </Card>
  );

}

export default memo(HistoryItem);