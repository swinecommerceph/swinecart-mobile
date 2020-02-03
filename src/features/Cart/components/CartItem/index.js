import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreActions } from 'easy-peasy'

import { NavigationService } from 'services';

import { Block, ProductAvatar, Text } from 'shared';

import { 
  ProductInfo,
  ProductActions,
} from './components';

function CartItem({ data, listIndex }) {

  const { product } = data;
  const {
    imageUrl, name, type, breed, age, breederName, farmLocation, isDeleted
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
      <Block flex={1} marginLeft={1}>
        <ProductInfo
          name={name}
          type={type}
          age={age}
          breed={breed}
          breederName={breederName}
          farmLocation={farmLocation}
        />
        {
          isDeleted && 
          <Block marginTop={0.5} padding={1} backgroundColor='color-info-100' borderRadius={5}>
            <Text semibold numberOfLines={2} size={14} textAlign='center' color='color-info-700'>
              This product has been deleted by the Breeder.
            </Text>
          </Block>
        }
        <ProductActions data={data} />
      </Block>
    </Block>
  );

}

export default memo(CartItem);