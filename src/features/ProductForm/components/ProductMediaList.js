import React, { memo, useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { LoadingView, ContainerView, EmptyListMessage } from 'molecules';

import ProductMediaItem from './ProductMediaItem';

function ProductMediaList() {

  const photos = useStoreState(state => state.productMedia.items);

  if (!photos) {
    return (
      <LoadingView />
    );
  }

  else {
    if (photos.length > 0) {
      return (
        <ContainerView>
          {
            photos.map(element => (
              <ProductMediaItem key={element.id} data={element} />
            ))
          }
        </ContainerView>
      );
    }
    else {
      return (
        <EmptyListMessage message='No Photos yet.' />
      );
    }
  }
}

export default memo(ProductMediaList);