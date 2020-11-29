import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useFormik } from 'formik';

import { types } from 'constants/enums';
import { NavigationService } from 'services';

import { SearchShopSchema } from 'schemas';

import { Select, Input } from 'molecules';
import { Block, Button, Divider } from 'atoms';

function Form() {

  const {
    breederOptions,
    breedOptions,
    selectedType,
    selectedBreeds,
    selectedBreeders
  } = useStoreState(state => state.filterItems);

  const {
    setSelectedType,
    setSelectedBreeds,
    setSelectedBreeders,
    setKeyword
  } = useStoreActions(actions => actions.filterItems);

  const getItems = useStoreActions(actions => actions.shop.getItems);

  const { values, handleSubmit, setFieldValue, errors, touched } = useFormik({
    initialValues: {},
    validationSchema: SearchShopSchema,
    onSubmit: ({ keyword }) => {
      setKeyword(keyword);
      getItems({ isRefresh: false });
      NavigationService.back();
    },
  });

  const onPressClear = () => {
    setKeyword('');
    setFieldValue('keyword', '');
    setSelectedType([]);
    setSelectedBreeds([]);
    setSelectedBreeders([]);
    getItems({ isRefresh: false });
  };

  const onSelectType = type => {
    setSelectedType(type);
  };

  const onSelectBreed = breed => {
    setSelectedBreeds(breed);
  };

  const onSelectBreeder = breeder => {
    setSelectedBreeders(breeder);
  };

  return (
    <Block flex={1} padding={1} backgroundColor='white1'>
      <Block>
        <Input
          name='keyword'
          label='Keyword'
          placeholder='Name, breeder, type'
          errors={errors}
          touched={touched}
          values={values}
          onChange={setFieldValue}
        />
      </Block>
      <Divider marginTop={1} />
      <Block marginTop={1}>
        <Select
          onSelect={onSelectType}
          selectedIndex={selectedType}
          placeholder='Select Type'
          multiSelect={true}
          label='Type'
          options={types}
        />
      </Block>
      <Block marginTop={1}>
        <Select
          onSelect={onSelectBreed}
          selectedIndex={selectedBreeds}
          placeholder='Select Breed'
          multiSelect={true}
          valueProp='name'
          uniqueId='id'
          label='Breed'
          options={breedOptions}
        />
      </Block>
      <Block marginTop={1}>
        <Select
          onSelect={onSelectBreeder}
          selectedIndex={selectedBreeders}
          placeholder='Select Breeder'
          multiSelect={true}
          valueProp='name'
          uniqueId='id'
          label='Breeder'
          options={breederOptions}
        />
      </Block>
      <Block marginTop={1}>
        <Button size='tiny' onPress={handleSubmit}>
          Submit
        </Button>
        <Button size='tiny' status='basic' onPress={onPressClear} marginTop={1}>
          Clear
        </Button>
      </Block>
    </Block>
  );
}

export default memo(Form);