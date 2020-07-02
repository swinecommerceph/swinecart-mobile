import React, { memo } from 'react';

import { pluralize } from 'utils/formatters';

import { ProductInfo, ProductAvatar, Card } from 'molecules';
import { Block, Text } from 'atoms';

import {
  StockBadge,
  StatusBadge,
  ProductActions
} from './components';

function ProductListItem({ data, listIndex }) {

  const { 
    imageUrl, name, type, breed, age, isUnique, quantity, status, imageCount,
    videoCount, 
  } = data;

  console.dir(data);

  return (
    <Card>
      <Block>
        <ProductAvatar image={imageUrl} type={type} shape='rounded' size={96} />
        <Block center marginTop={0.5}>
          <Text semibold size={14}>{pluralize(imageCount, 'Image')}</Text>
          <Text semibold size={14}>{pluralize(videoCount, 'Video')}</Text>
        </Block>
      </Block>
      <Block marginLeft={1}>
        <ProductInfo name={name} type={type} breed={breed} age={age} />
        <Block row marginVertical={0.5}>
          <StatusBadge status={status} />
          <StockBadge type={type} isUnique={isUnique} quantity={quantity} />
        </Block>
        <ProductActions data={data} listIndex={listIndex} />
      </Block>
    </Card>
  );

}

export default memo(ProductListItem);