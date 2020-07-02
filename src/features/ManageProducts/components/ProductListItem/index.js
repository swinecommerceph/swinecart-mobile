import React, { memo } from 'react';

import { ProductInfo, ProductAvatar, Card } from 'molecules';
import { Block } from 'atoms';

import {
  StockBadge,
  MediaInfo,
  ProductActions,
} from './components';

function ProductListItem({ data, listIndex }) {

  const { 
    imageUrl, name, type, breed, age, isUnique, quantity, status, imageCount,
    videoCount, 
  } = data;

  return (
    <Card>
      <Block>
        <ProductAvatar image={imageUrl} type={type} shape='rounded' size={96} />
        <MediaInfo imageCount={imageCount} videoCount={videoCount} />
      </Block>
      <Block flex={1} paddingHorizontal={1}>
        <ProductInfo name={name} type={type} breed={breed} age={age} />
        <StockBadge type={type} isUnique={isUnique} quantity={quantity} />
        <ProductActions data={data} listIndex={listIndex} />
      </Block>
    </Card>
  );

}

export default memo(ProductListItem);