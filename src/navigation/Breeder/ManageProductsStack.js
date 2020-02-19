import { createStackNavigator } from 'react-navigation-stack';

import {
  ManageProducts,
  EditProduct,
  ProductDetails,
} from 'features';

const navigator = createStackNavigator({
  ManageProducts: ManageProducts,
  EditProduct: EditProduct,
  ProductDetails: ProductDetails,
}, {
    initialRouteName: 'ManageProducts',
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