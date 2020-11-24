import React, { memo, useCallback } from 'react';
import {
  BottomNavigation as UKBottomNavigation,
} from '@ui-kitten/components';

import {
  BottomNavTab
} from './components';

function CustomerTabBar({ state, navigation, tabBarRoutes }) {

  const onSelect = useCallback(index => {
    const selectedTabRoute = state.routeNames[index];
    navigation.navigate(selectedTabRoute);
  }, [ state, navigation ]);

  return (
    <UKBottomNavigation
      // appearance='noIndicator'
      selectedIndex={state.index}
      onSelect={onSelect}
    >
      {tabBarRoutes.map(({ name, iconName }, index) => (
        <BottomNavTab
          title={name}
          iconName={iconName}
          key={index}
        />
      ))}
    </UKBottomNavigation>
  );

};

export default memo(CustomerTabBar);