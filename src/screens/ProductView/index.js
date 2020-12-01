import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { NavigationService } from 'services';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton, HeaderBarButton } from 'molecules';

import {
  Details,
} from './components';

function Container({ route }) {

  const accountType = useStoreState(state => state.user.accountType);
  const isLoading = useStoreState(state => state.productView.isLoading);

  const {
    getData, setLoading
  } = useStoreActions(actions => actions.productView);

  const productId = route.params.id;

  useFocusEffect(
    useCallback(() => {
      getData(productId);
      return () => {
        setLoading(true);
      };
    }, [ productId ])
  );

  function EditMediaButton() {
    const onPress = () => {
      NavigationService.navigate('ProductMedia', { id: productId });
    };
    return (
      <HeaderBarButton
        iconName='image'
        onPress={onPress}
      />
    );
  }

  return (
    <Fragment>
      <HeaderBar
        title='Product Details'
        accessoryLeft={BackButton}
        accessoryRight={accountType === 'Breeder' ? EditMediaButton : null}
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <Details />
      </StateScreen>
    </Fragment>
  );

}

export default memo(Container);