import { createStackNavigator } from 'react-navigation-stack';

import {
  BreederProducts,
  EditProduct,
  ProductDetails,
} from 'features';

const navigator = createStackNavigator({
  BreederProducts: BreederProducts,
  EditProduct: EditProduct,
  ProductDetails: ProductDetails,
}, {
    initialRouteName: 'BreederProducts',
    headerMode: 'none',
    defaultNavigationOptions: {
  }
});

navigator.navigationOptions = ({ navigation }) => {
  return {
    // tabBarVisible: false,
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;