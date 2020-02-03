import React, { memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { withStyles } from '@ui-kitten/components';
import { TabBar as RNTabBar } from 'react-native-tab-view';

import { shadows, colors } from 'constants/theme';

function TabBar(props) {

  const {
    themedStyle, jumpTo,
    ...otherProps
  } = props;

  const currentRoute = useStoreState(state => state.dashboard.currentRoute);
  const setCurrentRoute = useStoreActions(actions => actions.dashboard.setCurrentRoute);

  useEffect(() => {
    jumpTo(currentRoute);
  }, [currentRoute]);

  const getLabelText = ({ route }) => route.title;

  const onTabPress = ({ route }) => {
    setCurrentRoute(route.key);
  };

  return (
    <RNTabBar
      {...otherProps}
      jumpTo={jumpTo}
      useNativeDriver={true}
      getLabelText={getLabelText}
      labelStyle={themedStyle.labelStyle}
      indicatorStyle={themedStyle.indicatorStyle}
      style={themedStyle.tabBarStyle}
      tabStyle={themedStyle.tabStyle}
      onTabPress={onTabPress}
    />
  );

}

export default withStyles(memo(TabBar), () => ({
  tabBarStyle: {
    ...shadows.shadow3,
    backgroundColor: colors.primary,
    height: 56
  },
  labelStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: 4
  },
}));