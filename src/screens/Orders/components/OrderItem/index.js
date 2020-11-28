import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { ModalService } from 'services';

import { ProductAvatar, Card } from 'molecules';
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

  console.log(data);

  return (
    <TouchableOpacity
      disabled={status === 'requested'}
      activeOpacity={0.90}
      onPress={onPressView}
    >
      <Card>
        <ProductAvatar image={image} type={type} shape='rounded' size={96} />
        <Block flex={1} paddingHorizontal={1}>
          <ProductInfo name={name} type={type} breed={breed} />
          <OrderStatus status={status} requestCount={requestCount} reservation={reservation} />
          <OrderActions status={status} product={product} reservation={reservation} />
        </Block>
      </Card>
    </TouchableOpacity>
  );
}

export default memo(OrderItem);