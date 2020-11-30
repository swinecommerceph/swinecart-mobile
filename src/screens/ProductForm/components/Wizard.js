import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useFormik } from 'formik';

import SwineInformationPage from './SwineInformationPage';
import ProductInformationPage from './ProductInformationPage';
import FormFooter from './FormFooter';

import { ProductFormSchema } from 'schemas';

function Wizard() {

  const {
    currentStep,
    data,
  } = useStoreState(state => state.productForm);

  const formik = useFormik({
    initialValues: data,
    validationSchema: ProductFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Fragment>
      {currentStep === 1 && <ProductInformationPage formik={formik} /> }
      {currentStep === 2 && <SwineInformationPage formik={formik} /> }
      <FormFooter
        onSubmit={formik.handleSubmit}
        validateForm={formik.validateForm}
      />
    </Fragment>
  );
}

export default memo(Wizard);