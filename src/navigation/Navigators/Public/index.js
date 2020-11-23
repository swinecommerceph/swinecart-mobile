import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from 'screens/Login';

const Stack = createStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default Navigator;