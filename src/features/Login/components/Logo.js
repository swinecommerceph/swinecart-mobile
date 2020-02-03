import React, { memo } from 'react';
import { Image } from 'react-native';
import { Block, Text } from 'shared';

function Logo() {
  return (
    <Block center middle marginBottom={1.5}>
      <Image
        style={{ width: 175, height: 175 }}
        source={{ uri: 'http://swinecart.pcaarrd.dost.gov.ph/images/logodark.png' }}
      />
    </Block>
  );
}

export default memo(Logo, () => true);