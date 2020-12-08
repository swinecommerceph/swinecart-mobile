import React, { Fragment, memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import SwineInformationPage from './SwineInformationPage';
import ProductInformationPage from './ProductInformationPage';
import FormFooter from './FormFooter';

function Wizard() {

  const {
    currentStep,
    values,
    errors,
    touched,
  } = useStoreState(state => state.productForm);

  const {
    submit,
    setFieldValue,
    setFieldTouched,
  } = useStoreActions(actions => actions.productForm);

  const formControl = {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  };

  const onSubmit = () => {
    submit();
  };

  return (
    <Fragment>
      {
        currentStep === 1 &&
        <ProductInformationPage formControl={formControl} />
      }
      {
        currentStep === 2 &&
        <SwineInformationPage formControl={formControl} />
      }
      <FormFooter
        onSubmit={onSubmit}
      />
    </Fragment>
  );
}

export default memo(Wizard);