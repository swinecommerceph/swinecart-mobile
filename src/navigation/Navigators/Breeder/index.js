import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BreederScreen from 'screens/BreederScreen';

const Drawer = createDrawerNavigator();

function Navigator() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='BreederScreen' component={BreederScreen} />
        </Drawer.Navigator>
    );

}

export default Navigator;