import React, { PureComponent } from 'react';
import { withStyles } from '@ui-kitten/components';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { EmptyListMessage } from 'shared';

import { shadows, colors } from 'constants/theme';

import ChatList from './ChatList';
import NotificationList from './NotificationList';

class InboxTabView extends PureComponent {

  state = {
    index: 0,
    routes: [
      { key: 'chatList', title: 'Chats', },
      { key: 'notificationList', title: 'Notifications', },
    ]
  };

  chatListRoute = () =>  <ChatList />;
  notificationListRoute = () => <NotificationList />;

  getLabelText = ({ route }) => route.title;

  initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
  };

  renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        useNativeDriver={true}
        getLabelText={this.getLabelText}
        labelStyle={this.props.themedStyle.labelStyle}
        indicatorStyle={this.props.themedStyle.indicatorStyle}
        style={this.props.themedStyle.tabBarStyle}
        tabStyle={this.props.themedStyle.tabStyle}
      />
    )
  }

  renderScene = SceneMap({
    chatList: this.chatListRoute,
    notificationList: this.notificationListRoute,
  });

  renderLazyPlaceholder = () => {
    return (
      <EmptyListMessage title='Loading...' />
    );
  }

  onIndexChange = index => this.setState({ index });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={this.onIndexChange}
        initialLayout={this.initialLayout}
        renderTabBar={this.renderTabBar}
        renderLazyPlaceholder={this.renderLazyPlaceholder}
        lazy={true}
        lazyPreloadDistance={0}
        swipeEnabled={false}
      />
    );
  }
}

export default withStyles(InboxTabView, () => ({
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