import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class CustomerScreen extends PureComponent {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>CustomerScreen!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomerScreen;
