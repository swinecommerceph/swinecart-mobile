import { createStackNavigator } from 'react-navigation-stack';

import {
  ManageProducts,
  ProductForm,
} from 'features';

const navigator = createStackNavigator({
  ManageProducts: ManageProducts,
  ProductForm: ProductForm,
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