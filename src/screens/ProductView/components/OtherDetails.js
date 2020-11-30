import React, { memo } from 'react';
import trim from 'lodash/trim';

import { Block, Text } from 'atoms';

function OtherDetails({ data }) {

  const trimmedDetails = trim(data);

  return (
    <Block marginTop={1} backgroundColor='white1' paddingHorizontal={1}>
      <Text bold size={18} marginBottom={0.5} color='primary'>
        Other Information
      </Text>
      <Block>
        <Text normal size={14} textAlign='left'>
          {trimmedDetails}
        </Text>
      </Block>
    </Block>
  );
}

export default memo(OtherDetails, () => true);