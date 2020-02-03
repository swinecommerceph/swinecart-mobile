import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { EmptyListMessage } from 'shared';

import DashboardStats from './DashboardStats';
import RatingsAndReviews from './RatingsAndReviews';
import TabBar from './TabBar';

class DashboardTabView extends PureComponent {

  state = {
    index: 0,
    routes: [
      { key: 'stats', title: 'Stats', },
      { key: 'reviews', title: 'Reviews', },
    ]
  };

  statsRoute = () => <DashboardStats />;
  reviewsRoute = () => <RatingsAndReviews />;

  initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
  };

  renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
      />
    )
  }

  renderScene = SceneMap({
    stats: this.statsRoute,
    reviews: this.reviewsRoute,
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

export default DashboardTabView;