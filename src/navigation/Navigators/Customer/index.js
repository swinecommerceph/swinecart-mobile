import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomerScreen from 'screens/CustomerScreen';

import {
    OrderHistoryScreen,
    RequestProductScreen,
    FilterItemsScreen,
    ProductViewScreen,
    OrderDetailsScreen,
    HistoryDetailsScreen,
} from 'screens';

import DrawerContent from 'organisms/Drawer';

import HomeNavigator from './Home';

const Drawer = createDrawerNavigator();

const drawerRoutes = [
    { name: 'Order History', component: OrderHistoryScreen },
    { name: 'Farms', component: CustomerScreen },
    { name: 'Profile', component: CustomerScreen },
    { name: 'Settings', component: CustomerScreen },
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
            {drawerRoutes.map(({ name, component }, index) => (
                <Drawer.Screen name={name} component={component} key={index} />
            ))}

            <Drawer.Screen name='Home' component={HomeNavigator} />
            <Drawer.Screen name='RequestProduct' component={RequestProductScreen} />
            <Drawer.Screen name='FilterItems' component={FilterItemsScreen} />
            <Drawer.Screen name='ProductView' component={ProductViewScreen} />
            <Drawer.Screen name='OrderDetails' component={OrderDetailsScreen} />
            <Drawer.Screen name='HistoryDetails' component={HistoryDetailsScreen} />
        </Drawer.Navigator>
    );
}

export default Navigator;