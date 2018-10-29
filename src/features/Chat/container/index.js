import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Form, Item, Text,
  Input, Button, View, Icon, ScrollView
} from 'native-base';

import { 
  GiftedChat, Bubble
} from 'react-native-gifted-chat';

import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

@inject(['MessageStore'])
@observer
class Chat extends Component {

  renderBubble = props => {
    return (
      <Bubble {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'white',
          },
          right: {
            backgroundColor: '#00af66'
          }
        }}
      />
    );
  }
  componentWillMount() {
  }

  onSend(messages = []) {
    console.log(messages);
    this.props.MessageStore.addMessage(messages);
  }

  render() {

    const {
      contentStyle, openSansBold
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Chat
              </Title>
            </Body>
          </Header>
          <View style={[contentStyle]}>
            <GiftedChat
              renderBubble={this.renderBubble}
              showAvatarForEveryMessage={false}
              renderAvatar={null}
              messages={toJS(this.props.MessageStore.messages)}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 42,
                name: 'PigCard'
              }}
            />
          </View>
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

export default Chat;