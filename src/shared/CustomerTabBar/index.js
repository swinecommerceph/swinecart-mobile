import React, { memo } from 'react';
import {
  BottomNavigation as UKBottomNavigation,
} from '@ui-kitten/components';

import { NavigationService } from 'services';

import BottomNavigationTab from '../BottomNavigationTab';

function CustomerTabBar({ navigation }) {

  const onTabSelect = selectedIndex => {
    console.dir(selectedIndex);
    // const { [selectedIndex]: selectedRoute } = navigation.state.routes;
    // NavigationService.navigate(selectedRoute.routeName);
  };

  return (
    <UKBottomNavigation
      // appearance='noIndicator'
      selectedIndex={navigation.state.index}
      onSelect={onTabSelect}
    >
      <BottomNavigationTab title='Shop' iconName='shopping-bag' />
      <BottomNavigationTab title='SwineCart' iconName='shopping-cart' />
      <BottomNavigationTab title='Transactions' iconName='list' />
      <BottomNavigationTab title='Inbox' iconName='inbox' />
      {/* <BottomNavigationTab title='Profile' iconName='person' /> */}
    </UKBottomNavigation>
  );

};

export default memo(CustomerTabBar);