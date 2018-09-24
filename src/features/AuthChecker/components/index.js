import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import  {
  Container,
  Content
} from 'native-base'
import Spinner from 'react-native-spinkit';

class AuthChecker extends PureComponent {

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigation.navigate('Shop');
    // }, 3000);
    // const data = JSON.stringify({ name: 'Gio', role: 'Breeder' });
    // AsyncStorage.setItem('user', data);
    // AsyncStorage.removeItem('user');
    this.checkToken();
  }

  checkToken = async () => {
    const data = await AsyncStorage.getItem('token');
    const token = JSON.parse(data);
    if(token) {
      // get /me in api then check if token is valid or not
      // if token is valid get role and navigate to role screen
      // const { role } = user;
      // setUser in UserStore
      // check role of user
      // navigate to screen according to role
      // setTimeout(() => {
      //   this.props.navigation.navigate(role);
      // }, 500);
    }
    else {
      setTimeout(() => {
        this.props.navigation.navigate('PublicShop');
      }, 500);
    }
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content contentContainerStyle={[styles.container]}>
          <Spinner
            type='ThreeBounce'
            color='#ffffff'
            size={100}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00af66',
  }
});

export default AuthChecker;
