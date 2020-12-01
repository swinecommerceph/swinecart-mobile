import React, { memo } from 'react';
import upperFirst from 'lodash/upperFirst';
import { pluralize, capitalizeWords, formatBirthdate } from 'utils/formatters';

import { TextGroup } from 'molecules';
import { Block, Text } from 'atoms';

function ProductInfo({ data, breeder, farm }) {
  const { name, type, breed, birthDate, age } = data;
  const { name: breederName } = breeder;
  const { name: farmName, province: farmProvince } = farm;

  return (
    <Block backgroundColor='white1'>
      <Block paddingHorizontal={1} >
        <Text bold size={18} marginBottom={0.5} color='primary'>
          Product Information
        </Text>
      </Block>
      <TextGroup label='Name' data={capitalizeWords(name)} />
      <TextGroup
        label='Type - Breed'
        data={`${capitalizeWords(type)} - ${capitalizeWords(breed)}`}
      />
      {
        age
          ?
            (
              <TextGroup
                label='Age'
                data={`${pluralize(age, 'day')} old (Birthdate is on ${formatBirthdate(birthDate)})`}
              />
            )
          :
            (
              <TextGroup
                label='Age'
                data='Birthdate not indicated'
                isItalicized
              />
            )
      }
      <TextGroup
        label='Breeder'
        data={upperFirst(breederName)}
      />
      <TextGroup
        label='Farm from'
        data={`${upperFirst(farmName)}, ${upperFirst(farmProvince)}`}
      />
    </Block>
  );
}

export default memo(ProductInfo, () => true);