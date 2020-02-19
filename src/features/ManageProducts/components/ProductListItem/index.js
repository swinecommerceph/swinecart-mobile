import React, { memo } from 'react';

import { ProductInfo, ProductAvatar, Card } from 'molecules';
import { Block } from 'atoms';

import {
  StockBadge,
  StatusBadge,
  ProductActions
} from './components';

function ProductItem({ data, listIndex }) {

  const { 
    imageUrl, name, type, breed, age, isUnique, quantity, status
  } = data;

  return (
    <Card>
      <ProductAvatar shape='rounded' image={imageUrl} size={144} />
      <Block marginLeft={1}>
        <ProductInfo name={name} type={type} breed={breed} age={age} />
        <Block row marginVertical={1}>
          <StatusBadge status={status} />
          <StockBadge type={type} isUnique={isUnique} quantity={quantity} />
        </Block>
        <ProductActions data={data} listIndex={listIndex} />
      </Block>
    </Card>
  );

}

export default memo(ProductItem);