import React, { PureComponent } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider
} from 'native-base';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import Notification from '../components/Notification';


const data = Array(100).fill({ message: 'Hello' });
class Notifications extends PureComponent {

  renderItem = ({ item }) => (
    <Notification message={item.message} />
  );

  render() {

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
              data={data}
              renderItem={this.renderItem}
              keyExtractor={item => `${~~(Math.random() * 500000)}`}
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