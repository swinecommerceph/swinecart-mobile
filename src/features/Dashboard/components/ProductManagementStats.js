import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { NavigationService } from 'services';

import { Text } from 'atoms';

import StatCard from './StatCard';

function ProductManagementStats() {

  const stats = useStoreState(state => state.stats.data);

  const onPressHidden = () => {
    NavigationService.navigate('BreederProducts');
  };

  return (
    <Fragment>
      <Text bold size={18} textAlign='center' color='primary'>
        Product Management
      </Text>
      <StatCard title='Hidden' data={stats.hidden} onPress={onPressHidden} />
      <StatCard title='Displayed' data={stats.displayed} onPress={onPressHidden} />
      <StatCard title='Available Products' data={stats.available} onPress={onPressHidden} />
    </Fragment>
  )
}

export default memo(ProductManagementStats);