import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import  {
  StyleProvider, Text, View, Container, Header, Body, Title, Content, List,
  ListItem, Icon, Right, Button
} from 'native-base'

import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import {
  Navigation
} from '../../../services';

@inject(['MessageStore'])
@observer
class Conversations extends Component {

  componentDidMount() {
    const { MessageStore } = this.props;
    MessageStore.getThreads();
  }

  handleThreadClicked = user => {
    const { MessageStore } = this.props;
    MessageStore.setSelectedUser(user);
    Navigation.navigate('Chat');
  }

  renderRow = t => (
    <ListItem key={t.user.id}>
      <Body>
        <Text>{t.user.name}</Text>
      </Body>
      <Right>
        <Button 
          transparent
          onPress={() => this.handleThreadClicked({ id: t.user.id, name: t.user.name})}
        >
          <Icon
            type='Feather'
            name='arrow-right'
            style={{ color: '#000000' }}
          />
        </Button>
      </Right>
    </ListItem>
  );

  render() {
    const { MessageStore } = this.props;
    const {
      openSansBold
    } = styles;


    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Conversations
              </Title>
            </Body>
          </Header>
          <Content>
            <List 
              dataArray={MessageStore.threads}
              renderRow={this.renderRow}
            >
            </List>
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

export default Conversations;