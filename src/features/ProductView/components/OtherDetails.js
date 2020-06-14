import React, { memo } from 'react';
import trim from 'lodash/trim';

import { Block, Text } from 'atoms';

function OtherDetails({ data }) {

  const trimmedDetails = trim(data);

  return (
    <Block backgroundColor='white1' paddingHorizontal={1}>
      <Text bold size={20} color='primary' marginBottom={0.5}>Other Information</Text>
      <Block paddingBottom={1}>
        <Text normal size={15} textAlign='left'>
          {trimmedDetails}
        </Text>
      </Block>
    </Block>
  );
}

export default memo(OtherDetails, () => true);  