import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useStoreState, useStoreActions } from 'easy-peasy';

import BreederNavigator from '../Breeder';
import CustomerNavigator from '../Customer';

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
                  component={BreederNavigator}
                />
              )
            :
              (
                <Stack.Screen
                  name='CustomerNavigator'
                  component={CustomerNavigator}
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