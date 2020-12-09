import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ChatClient } from 'services';

import BreederScreen from 'screens/BreederScreen';

import {
  ProductViewScreen,
  ProductRequestsScreen,
  SendProductScreen,
  ReviewsScreen,
  RatingsScreen,
  ProductFormScreen,
  ProfileScreen,
  FarmsScreen,
  FarmDetailsScreen,
  FarmFormScreen,
  ProductMediaScreen,
  ConversationScreen,
  ProfileFormScreen,
} from 'screens';

import DrawerContent from 'organisms/Drawer';

import HomeNavigator from './Home';

const Drawer = createDrawerNavigator();

const drawerRoutes = [
  { name: 'Reviews', component: ReviewsScreen },
  { name: 'Ratings', component: RatingsScreen },
  { name: 'Farms', component: FarmsScreen },
  { name: 'Profile', component: ProfileScreen },
  { name: 'Settings', component: BreederScreen },
];

const drawerContent = props => (
  <DrawerContent {...props} drawerRoutes={drawerRoutes} />
);

function Navigator() {

  useEffect(() => {

    ChatClient.connect(user, message => {
      onMessage(message);
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
      <Drawer.Screen name='ProductView' component={ProductViewScreen} />
      <Drawer.Screen name='ProductRequests' component={ProductRequestsScreen} />
      <Drawer.Screen name='SendProduct' component={SendProductScreen} />
      <Drawer.Screen name='ProductForm' component={ProductFormScreen} />
      <Drawer.Screen name='ProductMedia' component={ProductMediaScreen} />
      <Drawer.Screen name='FarmDetails' component={FarmDetailsScreen} />
      <Drawer.Screen name='FarmForm' component={FarmFormScreen} />
      <Drawer.Screen name='ProfileForm' component={ProfileFormScreen} />
      <Drawer.Screen name='Conversation' component={ConversationScreen} />
  </Drawer.Navigator>
  );
}

export default Navigator;