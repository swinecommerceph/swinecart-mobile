import React, { memo } from 'react';
import {
  BottomNavigation as UKBottomNavigation,
} from '@ui-kitten/components';

import { shadows } from 'constants/theme';
import { NavigationService } from 'services';

import BottomNavigationTab from '../BottomNavigationTab';

function CustomerTabBar({ navigation }) {

  const onTabSelect = selectedIndex => {
    const { [selectedIndex]: selectedRoute } = navigation.state.routes;
    NavigationService.navigate(selectedRoute.routeName);
  };

  return (
    <UKBottomNavigation
      style={shadows.shadow2}
      appearance='noIndicator'
      selectedIndex={navigation.state.index}
      onSelect={onTabSelect}
    >
      <BottomNavigationTab title='Shop' iconName='shopping-bag' />
      {/* <BottomNavigationTab title='SwineCart' iconName='shopping-cart' /> */}
      {/* <BottomNavigationTab title='Transactions' iconName='list' /> */}
      {/* <BottomNavigationTab title='Inbox' iconName='inbox' /> */}
      {/* <BottomNavigationTab title='Profile' iconName='person' /> */}
    </UKBottomNavigation>
  );

};

export default memo(CustomerTabBar);