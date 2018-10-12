import {
  observable, action, toJS, runInAction
} from 'mobx';

import { 
  BreederProducts
} from '../../services';

import Product from '../models/Product';

class ProductsStore {

  @observable _products = [];

  @action async getProducts(page = 1) {
    const { data: { data: { data } } } = await BreederProducts.getProducts(page);
    runInAction(() => {
      const products = data.map(p => new Product(p));
      this._products.push(...products);
    });
  }


  @action async deleteProduct({ id }) {
    this._products = this._products.filter(product => product.id !== id);
  }

  @action async toggleStatus({ id }) {
    const product = this._products.find(product => product.id === id);
    const { data: { data: { status } } } = await BreederProducts.toggleStatus(id);
    product.setStatus(status);
  }

  @action toggleCheck({ id }) {
    const product = this._products.find(product => product.id === id);
    product.toggleChecked();
  }

  @action setIsChecked(isChecked) {
    this._products = this._products.map(product => {
      product.setIsChecked(isChecked);
      return product;
    });
  }

}

export default new ProductsStore();