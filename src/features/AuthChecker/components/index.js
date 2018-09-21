import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class AuthChecker extends PureComponent {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Breeder');
    }, 3000);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text>Checking if theres a logged in user...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AuthChecker;
