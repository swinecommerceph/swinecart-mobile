import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { Select, Input } from 'molecules';
import { Block, Button, Divider } from 'atoms';

function Form() {

  const {
    values,
    errors,
    touched,
    typeOptions,
    breedOptions,
    breederOptions,
  } = useStoreState(state => state.searchShopForm);

  const {
    submit,
    clear,
    setFieldValue,
    setFieldTouched,
  } = useStoreActions(actions => actions.searchShopForm);

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

  const onPressClear = () => {
    clear();
  };

  return (
    <Block flex={1} padding={1} backgroundColor='white1'>
      <Block>
        <Input
          name='keyword'
          label='Keyword'
          placeholder='Name, breeder, type'
          formControl={formControl}
        />
      </Block>
      <Divider />
      <Block marginTop={1}>
        <Select
          name='type'
          label='Type'
          placeholder='Select Type'
          multiSelect={true}
          options={typeOptions}
          valueProp='title'
          uniqueId='key'
          formControl={formControl}
        />
      </Block>
      <Block marginTop={1}>
        <Select
          name='breed'
          label='Breed'
          placeholder='Select Breed'
          multiSelect={true}
          options={breedOptions}
          valueProp='name'
          uniqueId='id'
          formControl={formControl}
        />
      </Block>
      <Block marginTop={1}>
        <Select
          name='breeder'
          label='Breeder'
          placeholder='Select Breeder'
          multiSelect={true}
          options={breederOptions}
          valueProp='name'
          uniqueId='id'
          formControl={formControl}
        />
      </Block>
      <Block marginTop={1}>
        <Button size='tiny' onPress={onPressSubmit}>
          Submit
        </Button>
        <Button size='tiny' status='basic' onPress={onPressClear} marginTop={1}>
          Reset
        </Button>
      </Block>
    </Block>
  );
}

export default memo(Form);