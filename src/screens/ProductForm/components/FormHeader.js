import React, { memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { Block, Text } from 'atoms';

function FormHeader() {

  const currentTitle = useStoreState(state => state.productForm.currentTitle);

  return (
    <Block padding backgroundColor='white1'>
      <Block>
        <Text bold size={22}>
          {currentTitle}
        </Text>
      </Block>
    </Block>
  );
}

export default memo(FormHeader);