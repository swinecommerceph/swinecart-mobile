import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { ChatClient } from 'services';

import CustomerScreen from 'screens/CustomerScreen';

import {
  OrderHistoryScreen,
  RequestProductScreen,
  FilterItemsScreen,
  ProductViewScreen,
  OrderDetailsScreen,
  HistoryDetailsScreen,
  FarmsScreen,
  FarmDetailsScreen,
  ProfileScreen,
  ConversationScreen,
} from 'screens';

import DrawerContent from 'organisms/Drawer';

import HomeNavigator from './Home';

const Drawer = createDrawerNavigator();

const drawerRoutes = [
  { name: 'Order History', component: OrderHistoryScreen },
  { name: 'Farms', component: FarmsScreen },
  { name: 'Profile', component: ProfileScreen },
  { name: 'Settings', component: CustomerScreen },
];

const drawerContent = props => (
  <DrawerContent {...props} drawerRoutes={drawerRoutes} />
);

function Navigator() {

  useEffect(() => {
    const socket = ChatClient.connect(user);

    socket.addEventListener('message', ({ data }) => {
      onMessage(JSON.parse(data));
    });

    return () => {
      ChatClient.closeConnection();
    };

  }, []);

  const user = useStoreState(state => state.user.data);
  const onMessage = useStoreActions(actions => actions.chat.onMessage);

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={drawerContent}
    >
      {drawerRoutes.map(({ name, component }, index) => (
        <Drawer.Screen name={name} component={component} key={index} />
      ))}

      <Drawer.Screen name='Home' component={HomeNavigator} />
      <Drawer.Screen name='RequestProduct' component={RequestProductScreen} />
      <Drawer.Screen name='FilterItems' component={FilterItemsScreen} />
      <Drawer.Screen name='ProductView' component={ProductViewScreen} />
      <Drawer.Screen name='OrderDetails' component={OrderDetailsScreen} />
      <Drawer.Screen name='HistoryDetails' component={HistoryDetailsScreen} />
      <Drawer.Screen name='FarmDetails' component={FarmDetailsScreen} />
      <Drawer.Screen name='Conversation' component={ConversationScreen} />
    </Drawer.Navigator>
  );
}

export default Navigator;