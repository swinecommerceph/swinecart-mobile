import React, { useEffect, memo, Fragment } from 'react';
import { enableScreens } from 'react-native-screens';
import { StoreProvider } from 'easy-peasy';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { NavigationService, ModalService } from 'services';
import RootNavigator from 'navigation';
import { colors } from 'constants/theme';

import StatusBar from 'atoms/StatusBar';
import ModalContainer from 'organisms/ModalContainer';

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
