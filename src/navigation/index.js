import React, { Fragment, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { NavigationService, ModalService } from 'services';

import PublicStack from './Navigators/Public';
import MainAppStack from './Navigators/MainApp';

import LoadingScreen from 'screens/LoadingScreen';

import ModalContainer from 'organisms/ModalContainer';

const Stack = createStackNavigator();

function RootNavigation(props) {

  useEffect(() => {
    getTokenFromStorage();
  }, []);

  const {
    isLoading,
    isLoggedIn,
  } = useStoreState(state => state.auth);

  const getTokenFromStorage = useStoreActions(
    actions => actions.auth.getTokenFromStorage
  );

  if (isLoading.isCheckingToken) {
    return <LoadingScreen />
  };

  return (
    <Fragment>
      <ModalContainer ref={ModalService.setModalContainerRef} />
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
    </Fragment>
  );
}


export default RootNavigation;