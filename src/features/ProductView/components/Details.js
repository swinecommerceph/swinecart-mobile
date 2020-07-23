import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { ContainerView } from 'molecules';

import ProductPrimaryImage from './ProductPrimaryImage';
import ProductInfo from './ProductInfo';
import SwineInfo from './SwineInfo';
import FarmFrom from './FarmFrom';
import Breeder from './Breeder';
import OtherDetails from './OtherDetails';

function Details() {

  const data = useStoreState(state => state.productView.data);

  const { productInfo, swineInfo, otherDetails, farm, breeder } = data;
  const { primaryImageUrl } = productInfo;

  return (
    <ContainerView paddingBottom={0}>
      <ProductPrimaryImage
        photoURL={primaryImageUrl}
        type={productInfo.type}
      />
      <ProductInfo data={productInfo} breeder={breeder} farm={farm} />
      <SwineInfo data={swineInfo} />
      <OtherDetails data={otherDetails} />
    </ContainerView>
  );
}

export default memo(Details, () => true);