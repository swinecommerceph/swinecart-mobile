import React, { memo } from 'react';
import { Divider } from '@ui-kitten/components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { types } from 'constants/enums';
import { NavigationService } from 'services';

import { Select, Input } from 'molecules';
import { Block, Button } from 'atoms';

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
    setSelectedBreeders
  } = useStoreActions(actions => actions.filterItems);

  const getItems = useStoreActions(actions => actions.shop.getItems);

  const onPressSubmit = () => {
    getItems({ isRefresh: false });
    NavigationService.back();
  };

  const onPressClear = () => {
    setSelectedType([]);
    setSelectedBreeds([]);
    setSelectedBreeders([]);
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
    <Block flex={1} padding={1}>
      <Block>
        <Input
          name='keyword'
          label='Keyword'
          placeholder='Name, breeder, type'
          errors={{}}
          touched={{}}
          values={{}}
          onChange={null}
        />
      </Block>
      <Divider />
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
        <Button size='tiny' onPress={onPressSubmit}>
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