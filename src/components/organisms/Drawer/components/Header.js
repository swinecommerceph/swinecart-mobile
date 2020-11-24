import React, { memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { Text, Block } from 'atoms';

function Header() {

    const { data: { name }, accountType } = useStoreState(state => state.user);

    return (
      <Block row flex={0.5} backgroundColor='primary'>
        <Block padding={1} alignSelf='flex-end'>
          <Text semibold color='white1' size={16} numberOfLines={1}>
            {name}
          </Text>
          <Text semibold color='white1' size={10} numberOfLines={1}>
            {accountType}
          </Text>
        </Block>
      </Block>
    )
  };

export default memo(Header);
