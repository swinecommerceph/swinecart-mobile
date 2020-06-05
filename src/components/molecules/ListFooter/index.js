import React, { Fragment, memo } from 'react';
import { Spinner } from '@ui-kitten/components';

import { Button, Block } from 'atoms';

function ListFooter({ isLoadingMore, onPressLoadMore }) {
  return (
    <Fragment>
      <Block flex={1} center middle padding={1} backgroundColor='gray6'>
        { isLoadingMore 
            ? 
              <Spinner size='giant' />
            :
              <Button
                size='tiny'
                disabled={isLoadingMore}
                onPress={onPressLoadMore}
              >
                Show More
              </Button>
        }
      </Block>
    </Fragment>
  );
}

export default memo(ListFooter);