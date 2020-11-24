import React, { memo } from 'react';
import {
  Drawer as UKDrawer,
} from '@ui-kitten/components';

import {
  Header,
  Footer,
  DrawerItem
} from './components';

function Drawer({ state, navigation, drawerRoutes }) {

  const onSelect = ({ row }) => {
    const selectedRoute = state.routeNames[row];
    navigation.navigate(selectedRoute);
    navigation.closeDrawer();
  };

  return (
    <UKDrawer header={Header} footer={Footer} onSelect={onSelect}>
      {drawerRoutes.map(({ title }, index) => (
        <DrawerItem title={title} key={index} />
      ))}
    </UKDrawer>
  );
};

export default memo(Drawer);
