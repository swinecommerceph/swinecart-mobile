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
    mode,
  } = useStoreState(state => state.productForm);

  const {
    addProduct,
    editProduct,
  } = useStoreActions(actions => actions.productForm);

  const formik = useFormik({
    initialValues: data,
    validationSchema: ProductFormSchema,
    onSubmit: (values) => {
      if (mode === 'add') {
        addProduct({
          values,
          resetForm: formik.resetForm
        });
      }
      else {
        editProduct({
          values,
          resetForm: formik.resetForm
        });
      }
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