import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class Shop extends PureComponent {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Shop</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Shop;
