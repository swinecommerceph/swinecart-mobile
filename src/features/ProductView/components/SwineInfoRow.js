import React, { memo } from 'react';
import { toString } from 'lodash';

import {
  Block, Text
} from 'atoms';

function SwineInfoRow({ label, data }) {

  return (
    <Block flex={1} row marginBottom={0.5} center>
      <Text normal size={16} color='black1'>{label}: </Text>
      {
        data 
          ? <Text normal size={16} color='black1'>{toString(data)}</Text>
          : <Text italic size={14} color='gray5'>Not Indicated</Text>
      }
    </Block>
  );
}


export default memo(SwineInfoRow, () => true);