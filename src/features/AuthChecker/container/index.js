import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage
} from 'react-native';
import {
  Container,
  Content
} from 'native-base'
import Spinner from 'react-native-spinkit';

import {
  observer, inject
} from 'mobx-react';

import { Navigation } from '../../../services/';

@inject('UserStore', 'CommonStore')
@observer
class AuthChecker extends Component {

  componentDidMount() {
    this.checkToken();
  }

  checkToken = async () => {
    const { 
      CommonStore, UserStore
    } = this.props;
    
    const token = await AsyncStorage.getItem('token');

    if(token) {
      await CommonStore.setToken(token);
      await UserStore.getUser();
      Navigation.navigate(UserStore.userRole);
    }
    else {
      Navigation.navigate('Public');
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
