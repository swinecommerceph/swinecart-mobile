import React, { Fragment, memo } from 'react';

import { Button, Block, Loader } from 'atoms';

function ListFooter({ isLoadingMore, onPressLoadMore }) {
  return (
    <Fragment>
      <Block flex={1} center middle padding={1} backgroundColor='gray6'>
        { isLoadingMore 
            ? 
              <Loader size='giant' />
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