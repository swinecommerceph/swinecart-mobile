import React, { memo } from 'react';
import upperFirst from 'lodash/upperFirst';
import { Block, Text } from 'shared';

import { addS, capitalizeWords, formatBirthdate } from 'utils/formatters';

function ProductInfo({ data, breeder, farm }) {
  const { name, type, breed, birthdate, age } = data;
  const { name: breederName } = breeder;
  const { name: farmName, province: farmProvince } = farm;

  return (
    <Block padding={1} backgroundColor='white1'>
      <Text bold size={24}>{`${capitalizeWords(name)}`}</Text>
      <Text semibild size={18}>{`${capitalizeWords(type)}`} - {`${capitalizeWords(breed)}`}</Text>
      {
        age && 
        <Text normal size={14} color='gray5'>{`${age} ${addS(age, 'day')} old (Birthdate is on ${formatBirthdate(birthdate)}`})</Text>
      }
      {
        !age &&
        <Text italic size={14} color='gray5'>Birthdate not indicated</Text>
      }
      <Text normal size={16} color='black1'>{upperFirst(breederName)}</Text>
      <Text normal size={16} color='black1'>{`${upperFirst(farmName)}, ${upperFirst(farmProvince)}`}</Text>
    </Block>
  );
}

export default memo(ProductInfo, () => true);