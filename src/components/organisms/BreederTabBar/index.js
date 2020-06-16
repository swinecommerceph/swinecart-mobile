import React, { memo } from 'react';
import {
  BottomNavigation as UKBottomNavigation,
} from '@ui-kitten/components';

import { shadows } from 'constants/theme';
import { NavigationService } from 'services';

import BottomNavigationTab from 'molecules/BottomNavigationTab';

function BreederTabBar({ navigation }) {

  const onTabSelect = selectedIndex => {
    const { [selectedIndex]: selectedRoute } = navigation.state.routes;
    NavigationService.navigate(selectedRoute.routeName);
  };

  return (
    <UKBottomNavigation
      selectedIndex={navigation.state.index}
      onSelect={onTabSelect}
    >
      <BottomNavigationTab title='Products' iconName='shopping-bag' />
      <BottomNavigationTab title='Orders' iconName='car' />
      <BottomNavigationTab title='Dashboard' iconName='grid' />
      <BottomNavigationTab title='Inbox' iconName='inbox' />
    </UKBottomNavigation>
  );

};

export default memo(BreederTabBar);