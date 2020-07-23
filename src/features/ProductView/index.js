import React, { Fragment, memo, useEffect } from 'react';
import { useFocusEffect } from 'react-navigation-hooks';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  Details 
} from './components';

function Container({ navigation }) {

  const isLoading = useStoreState(state => state.productView.isLoading);

  const {
    getData, setLoading
  } = useStoreActions(actions => actions.productView);

  const productId = navigation.getParam('id');

  useEffect(() => {

    getData(productId);

    return () => {
      setLoading(true);
    };

  }, [navigation]);

  return (
    <Fragment>
      <HeaderBar
        title='Product Details'
        accessoryLeft={BackButton}
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <Details />
      </StateScreen>
    </Fragment>
  );

}

export default memo(Container);