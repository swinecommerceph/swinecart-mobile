import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useFormik } from 'formik';

import { NavigationService } from 'services';

import { SearchShopSchema } from 'schemas';

import { Select, Input } from 'molecules';
import { Block, Button, Divider } from 'atoms';

const initialValues = {
  keyword: null,
  type: null,
  breed: null,
  breeder: null,
};

function Form() {

  const {
    breederOptions,
    breedOptions,
    typeOptions,
  } = useStoreState(state => state.filterItems);

  const {
    setFilter
  } = useStoreActions(actions => actions.filterItems);

  const getItems = useStoreActions(actions => actions.shop.getItems);

  const { handleSubmit, resetForm, ...formControl } = useFormik({
    initialValues,
    validationSchema: SearchShopSchema,
    onSubmit: (values) => {
      setFilter(values);
      getItems({ isRefresh: false });
      NavigationService.back();
    },
  });

  const onPressClear = () => {
    resetForm();
    setFilter(initialValues);
    getItems({ isRefresh: false });
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
        <Button size='tiny' onPress={handleSubmit}>
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