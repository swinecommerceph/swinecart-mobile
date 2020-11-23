import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useStoreState, useStoreActions } from 'easy-peasy';

import LoginScreen from 'screens/Login';
import LoadingScreen from 'screens/LoadingScreen';

const Stack = createStackNavigator();

function Navigator() {

    useEffect(() => {
        getUserData();
    }, []);

    const accountType = useStoreState(state => state.user.accountType);
    const getUserData = useStoreActions(actions => actions.user.getUserData);

    return (
        <Stack.Navigator headerMode='none'>
            { accountType
                ?
                    accountType === 'Breeder'
                        ? <Stack.Screen name='Login' component={LoginScreen} />
                        : <Stack.Screen name='Login' component={LoginScreen} />
                :
                    <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
            }
        </Stack.Navigator>
    );
}

export default Navigator;