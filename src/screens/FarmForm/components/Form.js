import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Input, Select, ContainerView } from 'molecules';
import { Block, Button } from 'atoms';

function Form() {

  const {
    values,
    errors,
    touched,
    provinceOptions,
  } = useStoreState(state => state.farmForm);

  const {
    submit,
    setFieldValue,
    setFieldTouched,
  } = useStoreActions(actions => actions.farmForm);

  const formControl = {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  };

  const onPressSubmit = () => {
    submit();
  };

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
        <Button onPress={onPressSubmit}>
          Submit
        </Button>
      </Block>
    </ContainerView>
  );

}

export default memo(Form);
