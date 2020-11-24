import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useStoreState, useStoreActions } from 'easy-peasy';

import BreederScreen from 'screens/BreederScreen';
import CustomerScreen from 'screens/CustomerScreen';
import LoadingScreen from 'screens/LoadingScreen';

const Stack = createStackNavigator();

function Navigator() {

    useEffect(() => {
        getUserData();
    }, []);

    const accountType = useStoreState(state => state.user.accountType);
    const getUserData = useStoreActions(actions => actions.user.getUserData);

    return (
        <Stack.Navigator headerMode='none' animationEnabled={false}>
            { accountType
                ?
                    accountType === 'Breeder'
                        ?
                            (
                                <Stack.Screen
                                    name='BreederNavigator'
                                    component={BreederScreen}
                                />
                            )
                        :   (
                                <Stack.Screen
                                    name='CustomerNavigator'
                                    component={CustomerScreen}
                                />
                            )
                :
                    (
                        <Stack.Screen
                            name='LoadingScreen'
                            component={LoadingScreen}
                        />
                    )
            }
        </Stack.Navigator>
    );
}

export default Navigator;