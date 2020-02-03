import React, { memo } from 'react';

import {
  Block, Text
} from 'shared';

function SwineInfoRow({ label, data }) {
  return (
    <Block flex={1} row marginBottom={0.5} center>
      <Text normal size={16} color='black1'>{label}: </Text>
      { 
        data && 
        <Text normal size={16} color='black1'>
          {data}
        </Text>
      }
      {
        !data &&
        <Text italic size={14} color='gray5'>
          Not Indicated
        </Text>
      }
    </Block>
  );
}


export default memo(SwineInfoRow, () => true);