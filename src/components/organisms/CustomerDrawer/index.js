import React, { memo, useMemo } from 'react';
import { Drawer, DrawerItem as UKDrawerItem, IndexPath } from '@ui-kitten/components';

import { NavigationService } from 'services';
import { Text, Icon } from 'atoms';

function DrawerItem({ title, iconName, ...otherProps }) {

  const renderIcon = () => (
    <Icon
      name={iconName}
      color='black1'
      size={22}
    />
  );

  return (
    <UKDrawerItem
      {...otherProps}
      title={<Text semibold>{title}</Text>}
    // accessoryLeft={renderIcon}
    />
  );
}

function CustomerDrawer({ navigation }) {

  const onSelect = ({ row: index }) => {
    const { [index]: selectedRoute } = navigation.state.routes;
    navigation.closeDrawer();
    NavigationService.navigate(selectedRoute.routeName);
  };

  const selectedIndex = useMemo(
    () => new IndexPath(navigation.state.index),
    [navigation.state.index]
  );

  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={onSelect}
    >
      <DrawerItem title='Farms' iconName='person' />
      <DrawerItem title='Profile' iconName='person' />
    </Drawer>
  );
};

export default memo(CustomerDrawer);