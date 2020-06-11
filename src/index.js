import React, { useEffect, memo, Fragment } from 'react';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import { enableScreens } from 'react-native-screens';
import { StoreProvider } from 'easy-peasy';
 
import RootNavigator from 'navigation';
import { NavigationService, ModalService } from 'services';
import StatusBar from 'shared/StatusBar';
import ModalContainer from 'shared/ModalContainer';
import { colors } from 'constants/theme';

import store from './store';

// enableScreens();

function App() {

  useEffect(() => {
  }, []);

  return (
    <StoreProvider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={colors}>
        <StatusBar />
        <ModalContainer ref={ModalService.setModalContainerRef} />
        <RootNavigator ref={NavigationService.setTopLevelNavigator}/>
      </ApplicationProvider>
    </StoreProvider>
  );
};

export default memo(App);
