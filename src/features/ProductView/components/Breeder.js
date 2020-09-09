import React, { memo } from 'react';
import upperFirst from 'lodash/upperFirst';
import {
  Block, Text
} from 'atoms';

function Breeder({ data }) {
  const {
    name
  } = data;

  return (
    <Block marginVertical={1}>
      <Text bold size={20} marginBottom={0.5} color='primary'>Breeder</Text>
      <Block flex={1} marginBottom={0.5}>
        <Text semibold size={18} color='black1'>{upperFirst(name)}</Text>
      </Block>
    </Block>
  );
}


export default memo(Breeder, () => true);