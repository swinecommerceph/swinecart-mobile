import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { ModalService } from 'services';

import { ContainerView } from 'molecules';
import { Button, Block, LoadingOverlay } from 'atoms';

import ProductInfo from './ProductInfo';
import SwineInfo from './SwineInfo';
import OtherDetails from './OtherDetails';
import Images from './Images';

function Details() {

  const isAddingItem = useStoreState(state => state.cart.isAddingItem);
  const accountType = useStoreState(state => state.user.accountType);
  const data = useStoreState(state => state.productView.data);

  const {
    productInfo,
    swineInfo,
    otherDetails,
    farm,
    breeder,
    images,
  } = data;


  const onPressAdd = () => {
    ModalService.showModal('AddToCart', { ...productInfo });
  };

  return (
    <Fragment>
      <LoadingOverlay show={isAddingItem} />
      <ContainerView paddingBottom={2} backgroundColor='white1'>
        <Images data={images} type={productInfo.type} />
        <ProductInfo data={productInfo} breeder={breeder} farm={farm} />
        <SwineInfo data={swineInfo} type={productInfo.type} />
        <OtherDetails data={otherDetails} />
      </ContainerView>
      {
        accountType === 'Customer'
        ?
          <Block padding={0.5}>
            <Button size='small' onPress={onPressAdd}>
              Add to Cart
            </Button>
          </Block>
        : []
      }
    </Fragment>
  );
}

export default memo(Details);