import React, { memo } from 'react';
import { Block, Text } from 'components/basic';
import { addS, capitalizeWords } from 'utils/formatters';

function ProductInfo({ name, type, breed, age, breederName, farmLocation }) {
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
        <Text italic size={12} color='gray5'>Age not indicated</Text>
      }
      <Text bold color='black1' size={14} marginTop={0.5}>
        {breederName}
      </Text>
      <Text normal size={12}>
        {capitalizeWords(farmLocation)}
      </Text>
    </Block>
  );
}

export default memo(ProductInfo);