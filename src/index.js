import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import { StoreProvider } from 'easy-peasy';
import {
    ApplicationProvider as UKProvider,
    IconRegistry as UKIconRegistry
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import RootNavigation from 'navigation';
import { colors } from 'constants/theme';

import StatusBar from 'atoms/StatusBar';

import store from './store';

enableScreens();

function App() {

    useEffect(() => {
        console.log('App mounted');
    }, []);

    return (
        <StoreProvider store={store}>
            <UKIconRegistry icons={EvaIconsPack} />
            <UKProvider {...eva} theme={colors}>
                <StatusBar />
                <RootNavigation />
            </UKProvider>
        </StoreProvider>
    );
}

export default App;