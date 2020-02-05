import React, { memo } from 'react';
import { Spinner } from '@ui-kitten/components';

import { Block } from 'atoms';

function LoadingView() {
  return (
    <Block flex={1} center middle backgroundColor='gray2'>
      <Spinner 
        size='giant'
      />
    </Block>
  );
}

export default memo(LoadingView, () => true);