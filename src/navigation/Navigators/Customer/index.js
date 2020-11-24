import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from 'organisms/Drawer';

import HomeNavigator from './Home';

const Drawer = createDrawerNavigator();

const drawerRoutes = [
    { title: 'Order History' },
    { title: 'Farms' },
    { title: 'Profile' },
];

const drawerContent = props => (
    <DrawerContent {...props} drawerRoutes={drawerRoutes} />
);

function Navigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={drawerContent}
        >
            <Drawer.Screen name='Home' component={HomeNavigator} />
        </Drawer.Navigator>
    );
}

export default Navigator;