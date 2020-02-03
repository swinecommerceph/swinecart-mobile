import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreActions } from 'easy-peasy'

import { NavigationService } from 'services';

import { Block, ProductAvatar } from 'shared';

import {
  ProductInfo,
  OrderStatus,
  ProductActions,
} from './components';

function OrderItem({ data, listIndex }) {

  const { status, statusTime, product, reservationDetails } = data;

  const {
    imageUrl, name, type, breed, age, breederName, farmLocation
  } = product;

  return (
    <Block
      row padding={1}
      backgroundColor='white1'
      borderBottomWidth={1}
      borderBottomColor='gray1'
    >
      <ProductAvatar
        shape='rounded'
        image={imageUrl} size={90}
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
        <OrderStatus status={status} statusTime={statusTime} />
        {status === 'sold' && <ProductActions /> }
      </Block>
    </Block>
  );

}

export default memo(OrderItem);