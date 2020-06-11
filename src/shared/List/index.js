import React, { Fragment, memo, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { withStyles } from '@ui-kitten/components';

import { colors } from 'constants/theme';

import EmptyListMessage from '../EmptyListMessage';
import ListFooter from '../ListFooter';

function List(props) {

  const {
    eva, Component, keyExtractor, emptyListMessage, isRefreshing,
    isLoadingMore, onPressLoadMore, onRefresh, data
  } = props;

  const renderItem = useCallback(({ item, index }) => {
    return (
      <Component
        data={item}
        listIndex={index}
      />
    );
  }, []);

  const renderListEmptyComponent = useCallback(() => (
    <EmptyListMessage message={emptyListMessage} />
  ), []);

  const renderFooterComponent = useCallback(() => {
    return (
      <Fragment>
        {data.length > 0 && <ListFooter isLoadingMore={isLoadingMore} onPressLoadMore={onPressLoadMore} />}
      </Fragment>
    )
  }, [ data, isLoadingMore ]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      ListEmptyComponent={renderListEmptyComponent}
      ListFooterComponent={renderFooterComponent}
      ListFooterComponentStyle={eva.style.ListFooterStyle}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing} 
          onRefresh={onRefresh} 
        />
      }
      style={eva.style.containerStyle}
      contentContainerStyle={eva.style.contentContainerStyle}
    />
  );
}

export default withStyles(memo(List), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  ListFooterStyle: {
  }
}));