import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Block, Text } from 'shared';

function Container() {

  return (
    <Block flex={1} center middle>
      <Text bold>History</Text>
    </Block>
  );
}

export default memo(Container, () => true);