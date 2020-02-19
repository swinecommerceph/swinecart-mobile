import React, { memo } from 'react';

import { Block, Text } from 'atoms';
import { addS, capitalizeWords } from 'utils/formatters';

function ProductInfo({ name, type, breed, age, breederName, farmLocation }) {
  return (
    <Block alignSelf='flex-start'>
      <Text bold color='black1' size={18} numberOfLines={3}>
        {capitalizeWords(name)}
      </Text>
      <Text normal size={14} numberOfLines={2}>
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
      {
        breederName &&
        <Text bold color='black1' size={14} marginTop={0.5}>
          {breederName}
        </Text>
      }
      {
        farmLocation &&
        <Text normal size={12}>
          {capitalizeWords(farmLocation)}
        </Text>
      }
    </Block>
  );
}

export default memo(ProductInfo);