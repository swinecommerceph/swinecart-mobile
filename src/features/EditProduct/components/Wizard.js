import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useFormik } from 'formik';

import SwineInformationPage from './SwineInformationPage';
import ProductInformationPage from './ProductInformationPage';
import ProductMedia from './ProductMedia';
import FormFooter from './FormFooter';

import { ProductFormSchema } from 'validationSchemas';

function Wizard() {

  const farms = useStoreState(state => state.farms.items);
  const formData = useStoreState(state => state.editProduct.data);
  const currentStep = useStoreState(state => state.editProduct.currentStep);
  const addProduct = useStoreActions(actions => actions.editProduct.addProduct);

  const formik = useFormik({
    initialValues: {
      ...formData,
      farmFrom: farms[0]
    },
    validationSchema: ProductFormSchema,
    onSubmit: (values) => {
      addProduct({
        values,
        resetForm: formik.resetForm
      });
    },
  });


  return (
    <Fragment>
      {currentStep === 1 && <ProductInformationPage formik={formik} /> }
      {currentStep === 2 && <SwineInformationPage formik={formik} /> }
      {/* {currentStep === 3 && <ProductMedia formik={formik} /> } */}
      <FormFooter
        onSubmit={formik.handleSubmit}
        validateForm={formik.validateForm}
      />
    </Fragment>
  );
}

export default memo(Wizard);