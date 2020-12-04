import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useFormik } from 'formik';

import { Input, Select, ContainerView } from 'molecules';
import { Block, Button } from 'atoms';

function Form() {

  const accountType = useStoreState(state => state.user.accountType);

  const { handleSubmit, ...formControl } = useFormik({
    initialValues: {
      accountType,
    },
    onSubmit: (values) => {
    },
  });

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
        options={[{ title: 'Abra', key: 'abra' }]}
        valueProp='title'
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
        required={true}
        width={128}
        formControl={formControl}
      />
      <Block row>
        <Block marginRight={1}>
          <Input
            name='landline'
            label='Landline'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formControl}
          />
        </Block>
        <Block>
          <Input
            name='mobile'
            label='Mobile'
            keyboardType='numeric'
            required={true}
            width={128}
            formControl={formControl}
          />
        </Block>
      </Block>
      <Block>
        <Button>
          Submit
        </Button>
      </Block>
    </ContainerView>
  );

}

export default Form;
