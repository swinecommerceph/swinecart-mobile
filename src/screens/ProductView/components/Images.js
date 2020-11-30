import React, { memo } from 'react';
import { useWindowDimensions  } from 'react-native';

import { Block, Text } from 'atoms';

function Images({ data }) {

  const height = ~~(useWindowDimensions().width / 2);

  const imageUrls = data.map(i => i.link);

  return (
    <Block backgroundColor='white1'>
    </Block>
  );
}

export default memo(Images, () => true);