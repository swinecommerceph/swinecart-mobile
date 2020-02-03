import React, { memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { Block, Text } from 'shared';

function FormHeader() {

  const currentStep = useStoreState(state => state.editProduct.currentStep);
  const currentTitle = useStoreState(state => state.editProduct.currentTitle);
  const maxSteps = useStoreState(state => state.editProduct.maxSteps);

  return (
    <Block padding backgroundColor='gray2'>
      <Block>
        <Text bold size={28} color='primary'>
          {currentTitle}
        </Text>
        <Text semibold size={14} color='primary'>
          Step {currentStep} of {maxSteps}
        </Text>
      </Block>
    </Block>
  );
}

export default memo(FormHeader);