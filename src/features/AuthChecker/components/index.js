import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet
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
