import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Spinner } from '@ui-kitten/components';
import { Block } from 'atoms';

function Container() {

  const checkStorage = useStoreActions(actions => actions.auth.checkStorageForToken);

  useEffect(() => {
    checkStorage();
  }, []);

  return (
    <Fragment>
      <Block flex={1} center middle backgroundColor='primary'>
        {/* <Text color='white1' size={24}>
          Loading...
        </Text> */}
        <Spinner size='giant' status='basic' />
      </Block>
    </Fragment>
  )

}

export default memo(Container);