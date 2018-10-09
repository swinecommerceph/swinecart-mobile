import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container, Content, Header, Body, Title, StyleProvider, Form, Item, Text,
  Input, Button, View, Icon, ScrollView
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import Divider from 'react-native-divider';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

@inject(['AuthStore'])
@observer
class Login extends Component {

  delay = fn => {
    setTimeout(() => fn(), 10);
  }

  navigateTo = route =>  {
    this.delay(() => {
      this.props.navigation.navigate(route);
    });
  }

  login = async () =>  {
    this.props.AuthStore.login();
  }

  handleEmailChange = value => {
    this.props.AuthStore.setEmail(value);
  }

  handlePasswordChange = value => {
    this.props.AuthStore.setPassword(value);
  }

  facebookLogin = () => {
    alert('Facebook Login');
  }

  googleLogin = () => {
    alert('Google Login');
  }

  render() {
    const { 
      contentStyle,
      container,
      backgroundPrimary,
      openSansBold,
      openSansSemiBold,
      flatButton,
      fullInput,
      sideBySide
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Body  style={[container]}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                
              </Title>
            </Body>
          </Header>
          <Content contentContainerStyle={[contentStyle]} padder>

            <View style={{ alignItems: 'center' }}>
              <Text style={[openSansBold, { fontSize: 22 }]}>Welcome!</Text>
              <Text style={[openSansBold, { fontSize: 14, color: '#7f8c8d' }]}>
                Login to your Customer account!
              </Text>
            </View>

            <View style={{ marginVertical: 10 }}>
              <Form>
                <Item style={[fullInput]}>
                  <Input placeholder='Email' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                </Item>
                <Item style={[fullInput]}>
                  <Input placeholder='Password' style={[openSansSemiBold]} secureTextEntry={true} onChangeText={this.handlePasswordChange}/>
                  <Button 
                    style={[flatButton, { backgroundColor: 'transparent' }]}
                    onPress={() => this.navigateTo('ForgotPassword')}
                  >
                    <Text uppercase={false} style={[openSansSemiBold, { fontSize: 9, color: '#000000' }]}>
                      Forgot Password?
                    </Text>
                  </Button>
                </Item>
                <Button 
                  block 
                  style={[backgroundPrimary, flatButton, { marginTop: 20 }]}
                  onPress={this.login}
                >
                  <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Login</Text>
                </Button>
              </Form>
            </View>

            <View style={{ alignItems: 'center', marginVertical: 10 }}>
              <Button 
                block 
                style={[flatButton, { backgroundColor: 'transparent', alignItems: 'center' }]} 
                onPress={() => this.navigateTo('Register')}
              >
                <Text uppercase={false} style={[openSansBold, { fontSize: 14, color: '#000000' }]}>
                  Tap here to create a Customer account!
                </Text>
              </Button>
            </View>

            <View>
              <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Divider orientation='center'>
                  <Text style={[openSansBold, { fontSize: 14, color: '#7f8c8d' }]}>
                    OR
                </Text>
                </Divider>
              </View>
              <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }]}>
                <Button
                  style={[flatButton, sideBySide, { backgroundColor: '#3B5998' }]}
                  onPress={this.facebookLogin}
                >
                  <Icon type='FontAwesome' name='facebook-square' />
                </Button>
                <Button 
                  style={[flatButton, sideBySide, { backgroundColor: '#DB3236' }]}
                  onPress={this.googleLogin}
                >
                  <Icon type='FontAwesome' name='google' />
                </Button>
              </View>
            </View>

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
  backgroundWhite: {
    backgroundColor: '#ffffff'
  },
  backgroundPrimary: {
    backgroundColor: '#00af66'
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
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
  fullInput: { 
    marginLeft: 0,
    marginVertical: 10
  },
  sideBySide: {
    margin: 0, width: '49%', justifyContent: 'center',
  }
});

export default Login;