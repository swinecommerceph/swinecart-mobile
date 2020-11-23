import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { NavigationService } from 'services';

import LoadingScreen from 'screens/LoadingScreen';

const Stack = createStackNavigator();

function RootNavigation(props) {

    useEffect(() => {
        getTokenFromStorage();
    }, []);

    const { isLoading, token } = useStoreState(state => state.auth);
    const getTokenFromStorage = useStoreActions(
        actions => actions.auth.getTokenFromStorage
    );

    return (
        <NavigationContainer ref={NavigationService.setNavigatorRef}>
            <Stack.Navigator headerMode='none'>
                {
                    isLoading
                        ? <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
                        : token
                            ? <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
                            : <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}
// Auth Flow PseudoCode

// if isSignedIn
//     Breeder
//     Customer
// else
//     Login
// Loading


export default RootNavigation;