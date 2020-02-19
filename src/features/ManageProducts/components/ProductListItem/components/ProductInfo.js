import React, { memo } from 'react';
import { capitalizeWords } from 'utils/formatters';
import { Block, Text } from 'shared';
import { addS  } from 'utils/formatters';

function ProductInfo({ name, type, breed, age }) {
  return (
    <Block>
      <Text bold color='black1' size={18}>
        {capitalizeWords(name)}
      </Text>
      <Text normal size={14}>
        {capitalizeWords(type)} - {breed}
      </Text>
      {
        age && 
        <Text normal size={12}>
          {`${age} ${addS(age, 'day')} old`}
        </Text>
      }
      {
        !age &&
        <Text italic size={12} color='gray5'>Birthdate not indicated</Text>
      }
    </Block>
  );

}

export default memo(ProductInfo);