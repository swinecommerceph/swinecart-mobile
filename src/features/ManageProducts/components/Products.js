import React, { Component } from 'react';

import {
  FlatList
} from 'react-native';

import  {
 View, Text
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import Product from './Product';

@inject(['ProductsStore'])
@observer
class Products extends Component {

  renderProduct = ({ item }) => {
    return (
      <Product product={item}/>
    );
  }

  render() {

    const {
      _products
    } = this.props.ProductsStore;

    return (
      <FlatList
        data={_products.slice()}
        renderItem={this.renderProduct}
        keyExtractor={product => `${product.id}`}
      />
    );
  }
}

export default Products;