import React, { memo } from 'react';

import { 
  Block, Text 
} from 'shared';

function ProfileText(props) {

  const { label, data } = props;

  return (
    <Block padding={1} borderBottomWidth={1} borderBottomColor='gray2'>
      <Text semibold color='gray5'>
        {label}
      </Text>
      <Text semibold>
        {data}
      </Text>
    </Block>
  )

}

export default memo(ProfileText, () => true);