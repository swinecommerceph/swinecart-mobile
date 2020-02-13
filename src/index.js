import React, { useEffect, memo } from 'react';
import { mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { enableScreens } from 'react-native-screens';
import { StoreProvider } from 'easy-peasy';
 
import RootNavigator from 'navigation';
import StatusBar from 'shared/StatusBar';
import ModalContainer from 'shared/ModalContainer';
import { NavigationService, ModalService } from 'services';
import { colors } from 'constants/theme';

import store from './store';

import customMapping from './constants/customMapping.json';

// enableScreens();

function App() {

  useEffect(() => {
  }, []);

  return (
    <StoreProvider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        mapping={mapping}
        theme={colors}
        customMapping={customMapping}
      >
        <StatusBar />
        <ModalContainer ref={ModalService.setModalContainerRef} />
        <RootNavigator ref={NavigationService.setTopLevelNavigator}/>
      </ApplicationProvider>
    </StoreProvider>
  );
};

export default memo(App);
