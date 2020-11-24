import React, { memo, Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import { Divider} from '@ui-kitten/components';

import { Text, Block } from 'atoms';

function Footer() {
  return (
    <Fragment>
      <Divider />
      <Block
        padding={1}
        backgroundColor='white1'
      >
        <Text semibold size={14}>Logout</Text>
      </Block>
    </Fragment>
  )
};

export default memo(Footer);
