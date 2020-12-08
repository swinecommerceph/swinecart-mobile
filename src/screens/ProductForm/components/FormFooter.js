import React, { Fragment, memo } from 'react';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { NavigationService, ToastService } from 'services';

import {
  Block,
  Button,
} from 'atoms';

const fields = [
  ['name', 'type', 'minPrice', 'maxPrice', 'isUnique', 'quantity'],
  [
    'breed', 'fatherBreed', 'motherBreed', 'birthWeight', 'farmFrom', 'houseType',
    'adg', 'fcr', 'bft', 'lsba', 'leftTeats', 'rightTeats', 'otherDetails'
  ],
];

function FormFooter({ onSubmit }) {

  const {
    currentStep,
    isFirstStep,
    isLastStep,
  } = useStoreState(state => state.productForm);

  const {
    nextStep,
    prevStep,
    validateForm,
  } = useStoreActions(actions => actions.productForm);

  const checkForErrors = errors => {
    return (fields[currentStep - 1].some(field => {
      return !!errors[field];
    }));
  };

  const onPressNext = async () => {

    const errors = await validateForm();

    if (errors && checkForErrors(errors)) {
      ToastService.show('Please fill up the required fields!', null);
    }
    else {
      if (isLastStep) {
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