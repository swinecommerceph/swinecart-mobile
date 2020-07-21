import React, { memo } from 'react';

import { Card, ProductAvatar } from 'molecules';

import { Block } from 'atoms';

import {
  ProductInfo,
  OrderStatus,
  ProductActions,
} from './components';

function OrderItem({ data }) {

  const { status, statusTime, product, reservationDetails } = data;

  const {
    imageUrl, name, type, breed, age, breederName, farmLocation
  } = product;

  return (
    <Card>
      <ProductAvatar
        shape='rounded'
        image={imageUrl}
        size={80}
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
        <OrderStatus status={status} statusTime={statusTime} />
        {status === 'sold' && <ProductActions data={data} /> }
      </Block>
    </Card>
  );

}

export default memo(OrderItem);