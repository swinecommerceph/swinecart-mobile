import React, { Fragment, memo, useEffect, useState } from 'react';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { NavigationService, ToastService } from 'services';

import {
  Block,
  Button,
} from 'atoms';

const fields = [
  ['name', 'type','minPrice', 'maxPrice', 'isUnique', 'quantity'],
  ['breed', 'fatherBreed', 'motherBreed', 'birthWeight', 'adg', 'fcr', 'bft', 'lsba', 'leftTeats', 'rightTeats', 'otherDetails'],
];

function FormFooter({ onSubmit, validateForm }) {

  const nextStep = useStoreActions(actions => actions.productForm.nextStep);
  const prevStep = useStoreActions(actions => actions.productForm.prevStep);

  const currentStep = useStoreState(state => state.productForm.currentStep);
  const isLastStep = useStoreState(state => state.productForm.isLastStep);
  const isFirstStep = useStoreState(state => state.productForm.isFirstStep);

  const checkForErrors = errors => {
    return (fields[currentStep - 1].some(field => {
      return !!errors[field];
    }));
  };

  const onPressNext = async () => {

    const errors = await validateForm();

    if (checkForErrors(errors)) {
      console.log(errors);
    }
    else {
      if (isLastStep === 2) {
        onSubmit();
      }
      else {
        nextStep();
      }
    }

  };

  const onPressPrev = () => {
    if (isFirstStep) {
      NavigationService.back();
    }
    else {
      prevStep();
    }
  };

  return (
    <Fragment>
      <HideWithKeyboard>
        <Block row center right padding={0.5} backgroundColor='white1'>
          <Block flex={1} marginRight={1}>
            <Button size='tiny'  status='basic' onPress={onPressPrev}>
              {isFirstStep ? 'Close' : 'Back'}
            </Button>
          </Block>
          <Block flex={1}>
            <Button size='tiny' status='primary' onPress={onPressNext}>
              {isLastStep ? 'Finish' : 'Next'}
            </Button>
          </Block>
        </Block>
      </HideWithKeyboard>
    </Fragment>
  );
}

export default memo(FormFooter);