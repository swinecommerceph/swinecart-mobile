import React, { useState, useMemo, } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { withStyles } from '@ui-kitten/components';

import { shadows, colors } from 'constants/theme';

import Chats from './Chats';
import Notifications from './Notifications';

function InboxTabView({ eva: { style } }) {

  const { width } = useWindowDimensions();

  const [ index, setIndex ] = useState(0);
  const [ routes ] = useState([
    { key: 'Chats', title: 'Chats', },
    { key: 'Notifications', title: 'Notifications', },
  ]);

  const navigationState = useMemo(
    () => ({ index, routes })
  , [ index ]);

  const getLabelText = ({ route }) => route.title;

  const initialLayout = useMemo(
    () => ({ width })
  , [ width ]);

  const renderScene = useMemo(() => SceneMap({
    Chats,
    Notifications,
  }), []);

  const renderTabBar = props => (
    <TabBar
      {...props}
      useNativeDriver={true}
      getLabelText={getLabelText}
      labelStyle={style.labelStyle}
      indicatorStyle={style.indicatorStyle}
      style={style.tabBarStyle}
      tabStyle={style.tabStyle}
    />
  );

  return (
    <TabView
      navigationState={navigationState}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      lazy={true}
      lazyPreloadDistance={0}
      swipeEnabled={false}
    />
  );
}

export default withStyles(InboxTabView, () => ({
  tabBarStyle: {
    ...shadows.shadow2,
    backgroundColor: colors.white1,
    height: 48
  },
  labelStyle: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'normal',
    fontSize: 14,
    color: colors.primary
  },
  indicatorStyle: {
    backgroundColor: colors.primary,
    height: 4
  },
}));