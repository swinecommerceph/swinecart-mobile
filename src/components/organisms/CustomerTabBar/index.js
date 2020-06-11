import React, { memo, Fragment } from 'react';
import {
  BottomNavigation as UKBottomNavigation, Divider
} from '@ui-kitten/components';

import { NavigationService } from 'services';

import { BottomNavigationTab } from 'molecules';

function CustomerTabBar({ navigation }) {

  const onTabSelect = selectedIndex => {
    const { [selectedIndex]: selectedRoute } = navigation.state.routes;
    NavigationService.navigate(selectedRoute.routeName);
  };

  return (
    <Fragment>
      <Divider />
      <UKBottomNavigation
        // appearance='noIndicator'
        selectedIndex={navigation.state.index}
        onSelect={onTabSelect}
      >
        <BottomNavigationTab title='Shop' iconName='shopping-bag' />
        <BottomNavigationTab title='SwineCart' iconName='shopping-cart' />
        <BottomNavigationTab title='Transactions' iconName='list' />
        <BottomNavigationTab title='Messages' iconName='inbox' />
        {/* <BottomNavigationTab title='Profile' iconName='person' /> */}
      </UKBottomNavigation>
    </Fragment>
  );

};

export default memo(CustomerTabBar);