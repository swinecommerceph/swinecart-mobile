import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { NavigationService } from 'services';

import PublicStack from './Navigators/Public';
import MainAppStack from './Navigators/MainApp';

import LoadingScreen from 'screens/LoadingScreen';

const Stack = createStackNavigator();

function RootNavigation(props) {

    useEffect(() => {
        getTokenFromStorage();
    }, []);

    const { isLoading, isLoggedIn } = useStoreState(state => state.auth);
    const getTokenFromStorage = useStoreActions(
        actions => actions.auth.getTokenFromStorage
    );

    if (isLoading) {
        return <LoadingScreen />
    };

    return (
        <NavigationContainer ref={NavigationService.setNavigatorRef}>
            <Stack.Navigator headerMode='none' animationEnabled={false}>
                {
                    isLoggedIn
                        ?
                            (
                                <Stack.Screen
                                    name='MainApp'
                                    component={MainAppStack}
                                />
                            )
                        :
                            (
                                <Stack.Screen
                                    name='Public'
                                    component={PublicStack}
                                />
                            )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default RootNavigation;