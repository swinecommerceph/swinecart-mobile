import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { ModalService } from 'services';

import { ProductAvatar } from 'molecules';
import { Block } from 'atoms';

import {
  ProductInfo,
  OrderStatus,
  OrderActions
} from './components';

function OrderItem({ data }) {

  const { status, requestCount, product, reservation } = data;
  const { name, type, breed, image } = product;

  const onPressView = useCallback(() => {
    ModalService.showModal('OrderDetails', { product, reservation });
  }, [ product, reservation ]);

  return (
    <TouchableOpacity
      disabled={status === 'requested'}
      activeOpacity={0.50}
      onPress={onPressView}
    >
      <Block row padding backgroundColor='white1' borderBottomWidth={1} borderBottomColor='gray1'>
        <ProductAvatar image={image} />
        <Block paddingHorizontal>
          <ProductInfo name={name} type={type} breed={breed} />
          <OrderStatus status={status} requestCount={requestCount} reservation={reservation} />
          <OrderActions status={status} product={product} reservation={reservation} />
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default memo(OrderItem);