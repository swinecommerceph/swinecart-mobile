import React, { Fragment, memo, useEffect } from 'react';

import { Button, Block, Image } from 'atoms';

const imageUrl = 'https://swinecart.work/images/product/medium/boar_pietrain1.jpg';
const fallbackUrl = 'https://swinecart.work/images/product/medium/boar_default.jpg'

function Container() {

  return (
    <Fragment>
      <Block flex={1} padding={1}>
        <Image
          imageUrl={imageUrl}
          fallbackUrl={fallbackUrl}
        />
      </Block>
    </Fragment>
  );
}

export default memo(Container, () => true);