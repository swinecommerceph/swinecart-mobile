import React, { memo } from 'react';
import upperFirst from 'lodash/upperFirst';
import {
  Block, Text
} from 'atoms';

function FarmFrom({ data }) {
  const {
    name, province
  } = data;

  return (
    <Block marginVertical={1}>
      <Text bold size={20} marginBottom={0.5} color='primary'>Farm From</Text>
      <Block flex={1} marginBottom={0.5}>
        <Text semibold size={16} color='black1'>{`${upperFirst(name)}, ${upperFirst(province)}`}</Text>
      </Block>
    </Block>
  );
}


export default memo(FarmFrom, () => true);