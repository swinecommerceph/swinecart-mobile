import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { NavigationService } from 'services';

import { Text, Block } from 'atoms';

import StatCard from './StatCard';

function ProductInventory() {

  const stats = useStoreState(state => state.stats.data);

  const onPress = () => {
    NavigationService.navigate('Products');
  };

  return (
    <Fragment>
      <Text bold size={18} textAlign='center'  marginTop={1}  color='primary'>
        Product Inventory
      </Text>
      <Block row paddingHorizontal={1} marginTop={1}>
        <Block flex={1} marginRight={1}>
          <StatCard
            title='Displayed'
            data={stats.displayed}
            onPress={onPress}
          />
        </Block>
        <Block flex={1}>
          <StatCard
            title='Hidden'
            data={stats.hidden}
            onPress={onPress}
          />
        </Block>
      </Block>
    </Fragment>
  )
}

export default memo(ProductInventory);