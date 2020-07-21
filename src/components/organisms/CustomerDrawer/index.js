import React, { memo, useMemo, Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import { 
  Divider, Drawer, DrawerItem as UKDrawerItem, IndexPath 
} from '@ui-kitten/components';

import { NavigationService } from 'services';

import { Text, Block } from 'atoms';

function DrawerItem({ title, iconName, ...otherProps }) {

  return (
    <UKDrawerItem
      {...otherProps}
      title={<Text semibold size={14}>{title}</Text>}
    />
  );
}

function Footer() {
  return (
    <Fragment>
      <Divider />
      <Block
        padding={1}
        backgroundColor='white1'
      >
        <Text>Logout</Text>
      </Block>
    </Fragment>
  )
};


function CustomerDrawer({ navigation }) {

  const { data, accountType } = useStoreState(state => state.user);

  const onSelect = ({ row: index }) => {
    const { [index]: selectedRoute } = navigation.state.routes;
    navigation.closeDrawer();
    NavigationService.navigate(selectedRoute.routeName);
  };

  const selectedIndex = useMemo(
    () => new IndexPath(navigation.state.index),
    [navigation.state.index]
  );

  function Header() {
    return (
      <Block row flex={0.5} backgroundColor='primary'>
        <Block padding={1} alignSelf='flex-end'>
          <Text semibold color='white1' size={16} numberOfLines={1}>
            {data.name}
          </Text>
          <Text semibold color='white1' size={10} numberOfLines={1}>
            {accountType}
          </Text>
        </Block>
      </Block>
    )
  };

  return (
    <Drawer
      header={Header}
      footer={Footer}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
    >
      <DrawerItem title='Order History' iconName='person' />
      <DrawerItem title='Farms' iconName='person' />
      <DrawerItem title='Profile' iconName='person' />
    </Drawer>
  );
};
export default memo(CustomerDrawer);
