import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Block, Text } from 'shared';

function Container() {

  const checkStorage = useStoreActions(actions => actions.auth.checkStorageForToken);

  useEffect(() => {
    checkStorage();
  }, []);

  return (
    <Fragment>
      <Block flex={1} center middle backgroundColor='primary'>
        <Text color='white1' size={24}>
          Loading...
        </Text>
      </Block>
    </Fragment>
  )

}

export default memo(Container);