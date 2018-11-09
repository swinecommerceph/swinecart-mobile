import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import Notification from '../components/Notification';

const data = Array(100).fill({ message: 'Hello' });
@inject(['NotificationStore'])
@observer
class Notifications extends Component {


  componentDidMount() {
    this.props.NotificationStore.getNotifs();
  }

  renderItem = ({ item }) => {
    const { data } = item;
    const description = data.description.replace(/(<b>|<\/b>)/g, '');
    return <Notification message={description} />
  }

  render() {

    const {
      NotificationStore
    } = this.props;

    const {
      container, openSansBold
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Body style={[container]}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Notifications
              </Title>
            </Body>
          </Header>
          <Content padder>
            <FlatList
              data={toJS(NotificationStore.notifs)}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </Content>
        </Container>
      </StyleProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  }
});

export default Notifications;