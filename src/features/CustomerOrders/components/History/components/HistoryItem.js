import React, { memo } from 'react';

import { NavigationService, ModalService } from 'services';

import { Card, ProductInfo, ProductAvatar } from 'molecules';

import { Block, Button } from 'atoms';

function HistoryItem({ data, listIndex }) {

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
          <Button size='small' onPress={onPressView}>
            View Order History
          </Button>
        </Block>
      </Block>
    </Card>
  );

}

export default memo(HistoryItem);