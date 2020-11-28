import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BreederScreen from 'screens/BreederScreen';

import {
    ProductViewScreen,
    ProductRequestsScreen,
    SendProductScreen,
    ReviewsScreen,
    RatingsScreen,
    ProductFormScreen,
} from 'screens';

import DrawerContent from 'organisms/Drawer';

import HomeNavigator from './Home';

const Drawer = createDrawerNavigator();

const drawerRoutes = [
    { name: 'Reviews', component: ReviewsScreen },
    { name: 'Ratings', component: RatingsScreen },
    { name: 'Farms', component: BreederScreen },
    { name: 'Profile', component: BreederScreen },
    { name: 'Settings', component: BreederScreen },
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
            <Drawer.Screen name='ProductView' component={ProductViewScreen} />
            <Drawer.Screen name='ProductRequests' component={ProductRequestsScreen} />
            <Drawer.Screen name='SendProduct' component={SendProductScreen} />
            <Drawer.Screen name='ProductForm' component={ProductFormScreen} />
        </Drawer.Navigator>
    );
}

export default Navigator;