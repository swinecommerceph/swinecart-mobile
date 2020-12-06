import React, { Fragment, memo, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useFormik } from 'formik';

import kebabCase from 'lodash/kebabCase';

import { FarmFormSchema } from 'schemas';

import { Input, Select, ContainerView } from 'molecules';
import { Block, Button } from 'atoms';

function Form({ mode }) {

  const accountType = useStoreState(state => state.user.accountType);

  const farmDetails = useStoreState(state => state.farmDetails.data);
  const data = useStoreState(state => state.farmForm.data);
  const provinceOptions = useStoreState(state => state.province.items);

  const {
    addFarm,
    updateFarm,
  } = useStoreActions(actions => actions.farmForm);

  const initialValues = {
    accountType,
    ...data,
  };

  const { handleSubmit, resetForm, ...formControl } = useFormik({
    initialValues,
    validationSchema: FarmFormSchema,
    onSubmit: (values) => {
      if (mode === 'add') {
        addFarm({
          values,
          resetForm
        });
      }
      else {
        updateFarm({
          values,
          resetForm
        });
      }
    },
  });

  useFocusEffect(
    useCallback(() => {
      if (mode === 'edit') {
        formControl.setValues({
          accountType,
          ...farmDetails,
        }, true);
      }
      else {
        formControl.setValues(initialValues, true);
      }
    }, [ mode, farmDetails ])
  );

  return (
    <ContainerView
      padding={1}
      backgroundColor='white1'
      showsVerticalScrollIndicator={true}
    >
      <Input
        name='name'
        label='Name'
        required={true}
        formControl={formControl}
      />
      <Input
        name='addressLine1'
        label='Address Line 1'
        required={true}
        formControl={formControl}
      />
      <Input
        name='addressLine2'
        label='Address Line 2'
        required={true}
        formControl={formControl}
      />
      <Select
        name='province'
        label='Province'
        placeholder='Select Province'
        required={true}
        options={provinceOptions}
        valueProp='text'
        uniqueId='key'
        formControl={formControl}
      />
      <Input
        name='farmType'
        label='Farm Type'
        required={true}
        formControl={formControl}
      />
      <Input
        name='zipCode'
        label='Postal/ZIP code'
        keyboardType='numeric'
        required={true}
        width={160}
        formControl={formControl}
      />
      <Block row>
        <Block marginRight={1}>
          <Input
            name='landline'
            label='Landline'
            keyboardType='numeric'
            optional={true}
            width={160}
            formControl={formControl}
          />
        </Block>
        <Block>
          <Input
            name='mobile'
            label='Mobile'
            keyboardType='numeric'
            required={true}
            width={160}
            formControl={formControl}
          />
        </Block>
      </Block>
      <Block>
        <Button onPress={handleSubmit}>
          Submit
        </Button>
      </Block>
    </ContainerView>
  );

}

export default memo(Form);
