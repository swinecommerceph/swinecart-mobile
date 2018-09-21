import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class Products extends PureComponent {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Products!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Products;
