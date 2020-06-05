import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { ContainerView } from 'shared';

import ProductPrimaryImage from './ProductPrimaryImage';
import ProductInfo from './ProductInfo';
import SwineInfo from './SwineInfo';
import FarmFrom from './FarmFrom';
import Breeder from './Breeder';
import OtherDetails from './OtherDetails';

function Details() {

  const data = useStoreState(state => state.productView.data);

  const { product_info, swine_info, other_details, farm, breeder } = data;
  const { primary_image } = product_info;

  return (
    <ContainerView paddingBottom={0}>
      <ProductPrimaryImage
        photoURL={primary_image}
      />
      <ProductInfo data={product_info} breeder={breeder} farm={farm} />
      <SwineInfo data={swine_info} />
      <OtherDetails data={other_details} />
    </ContainerView>
  );
}

export default memo(Details, () => true);