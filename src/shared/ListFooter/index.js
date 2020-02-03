import React, { Fragment, memo } from 'react';
import { Spinner } from '@ui-kitten/components';

import Block from '../Block';
import Button from '../Button';

function ListFooter({ isLoadingMore, onPressLoadMore }) {
  return (
    <Fragment>
      <Block flex={1} center middle padding={1} backgroundColor='gray2'>
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