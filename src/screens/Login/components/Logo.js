import React, { memo } from 'react';
import { APP_URL } from 'react-native-dotenv';
import { Image } from 'react-native';

import { Block } from 'atoms';

function Logo() {
  return (
    <Block center middle marginBottom={1.5}>
      <Image
        style={{ width: 175, height: 175 }}
        source={{ uri: `${APP_URL}/images/logodark.png` }}
      />
    </Block>
  );
}

export default memo(Logo);