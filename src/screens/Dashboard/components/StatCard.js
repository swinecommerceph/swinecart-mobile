import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Block, Text } from 'atoms';

function StatCard({ title, data, onPress }) {

  const { boar, sow, gilt, semen } = data;
  const total = boar + sow + gilt + semen;


  return (
    <TouchableOpacity
      activeOpacity={0.90}
      onPress={onPress}
    >
      <Block backgroundColor='white1' borderRadius={5} shadow='shadow2'>
        <Block flex={3} center middle padding={1}>
          <Text bold size={14} color='primary'>{title}</Text>
          <Text bold size={36}>{total}</Text>
        </Block>
        <Block
          flex={1}
          backgroundColor='primary'
          borderBottomRadius={5}
          padding={0.5}
        >
          <Block row>
            <Block flex={1}>
              <Text size={12} semibold color='white1' marginRight={0.5}>
                Boar
              </Text>
            </Block>
            <Text size={12} semibold color='white1' marginRight={0.5}>
              {boar}
            </Text>
          </Block>
          <Block row>
            <Block flex={1}>
              <Text size={12} semibold color='white1' marginRight={0.5}>
                Sow
              </Text>
            </Block>
            <Text size={12} semibold color='white1' marginRight={0.5}>
              {sow}
            </Text>
          </Block>
          <Block row>
            <Block flex={1}>
              <Text size={12} semibold color='white1' marginRight={0.5}>
                Gilt
              </Text>
            </Block>
            <Text size={12} semibold color='white1' marginRight={0.5}>
              {gilt}
            </Text>
          </Block>
          <Block row>
            <Block flex={1}>
              <Text size={12} semibold color='white1' marginRight={0.5}>
                Semen
              </Text>
            </Block>
            <Text size={12} semibold color='white1' marginRight={0.5}>
              {semen}
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default memo(StatCard);