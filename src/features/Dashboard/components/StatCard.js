import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Block, Text } from 'atoms';

function StatCard({ title, data, onPress }) {

  const { boar, sow, gilt, semen } = data;
  const total = boar + sow + gilt + semen;

  return (
    <TouchableOpacity
      activeOpacity={0.50}
      onPress={onPress}
    >
      <Block height={200} backgroundColor='white1' borderRadius={5} margin={1} shadow='shadow2'>
        <Block flex={3} center middle padding={1}>
          <Text bold size={14} color='primary'>{title}</Text>
          <Text bold size={36}>{total}</Text>
        </Block>
        <Block flex={1} center middle row space='around' backgroundColor='primary' borderBottomRadius={5} padding={1}>
          <Text semibold color='white1' marginRight={0.5}>BOAR: {boar}</Text>
          <Text semibold color='white1' marginRight={0.5}>SOW: {sow}</Text>
          <Text semibold color='white1' marginRight={0.5}>GILT: {gilt}</Text>
          <Text semibold color='white1'>SEMEN: {semen}</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default memo(StatCard);