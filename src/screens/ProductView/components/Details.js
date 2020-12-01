import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { ContainerView } from 'molecules';

import ProductInfo from './ProductInfo';
import SwineInfo from './SwineInfo';
import OtherDetails from './OtherDetails';
import Images from './Images';

function Details() {

  const data = useStoreState(state => state.productView.data);

  const {
    productInfo,
    swineInfo,
    otherDetails,
    farm,
    breeder,
    images,
  } = data;

  return (
    <ContainerView paddingBottom={2} backgroundColor='white1'>
      <Images data={images} type={productInfo.type} />
      <ProductInfo data={productInfo} breeder={breeder} farm={farm} />
      <SwineInfo data={swineInfo} type={productInfo.type} />
      <OtherDetails data={otherDetails} />
    </ContainerView>
  );
}

export default memo(Details, () => true);