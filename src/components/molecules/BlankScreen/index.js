import React, { memo } from 'react';

import { Block } from 'atoms';

function BlankScreen() {
  return (
    <Block flex={1} center middle backgroundColor='gray2'>
    </Block>
  );
}

export default memo(BlankScreen, () => true);