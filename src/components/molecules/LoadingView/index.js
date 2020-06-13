import React, { memo } from 'react';

import { Block, Loader } from 'atoms';

function LoadingView() {
  return (
    <Block flex={1} center middle backgroundColor='gray6'>
      <Loader
        size='giant'
      />
    </Block>
  );
}

export default memo(LoadingView, () => true);