import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreActions } from 'easy-peasy'

import { NavigationService } from 'services';

import { Block, ProductAvatar } from 'shared';

import {
  StockBadge,
  StatusBadge,
  ProductInfo,
  ProductActions
} from './components';

function ProductItem({ data, listIndex }) {

  const { id, image, name, type, breed, age, isUnique, quantity, status } = data;

  const setCurrentId = useStoreActions(actions => actions.productDetails.setCurrentId);

  const onPress = () => {
    setCurrentId(id);
    NavigationService.navigate('ProductDetails');
  };

  return (
    <Block
      row padding={1}
      backgroundColor='white1'
      borderBottomWidth={1}
      borderBottomColor='gray1'
    >
      <ProductAvatar shape='rounded' image={image} size={144} />
      <Block marginLeft={1}>
        <ProductInfo name={name} type={type} breed={breed} age={age} />
        <Block row marginVertical={1}>
          <StatusBadge status={status} />
          <StockBadge type={type} isUnique={isUnique} quantity={quantity} />
        </Block>
        <ProductActions data={data} listIndex={listIndex} />
      </Block>
    </Block>
  );

}

export default memo(ProductItem);