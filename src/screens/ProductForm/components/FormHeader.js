import React, { memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { Block, Text } from 'atoms';

const titles = [
  'Product Information',
  'Swine Information',
];

function FormHeader() {

  const currentStep = useStoreState(state => state.productForm.currentStep);

  return (
    <Block padding backgroundColor='white1'>
      <Block>
        <Text bold size={22}>
          {titles[currentStep - 1]}
        </Text>
      </Block>
    </Block>
  );
}

export default memo(FormHeader);