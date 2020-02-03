import { NavigationActions } from 'react-navigation';

class Navigation {

  navigator;

  setTopLevelNavigator = ref => {
    this.navigator = ref;
  }

  navigate = (routeName, params) => {
    this.navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }

  back = () => {
    this.navigator.dispatch(NavigationActions.back());
  }

  popToTop = (immediate = true) => {
    this.navigator.dispatch({
      type: NavigationActions.POP_TO_TOP,
      immediate
    });
  }

  reset = ({ actions, index }) => {
    this.navigator.dispatch({
      type: NavigationActions.RESET
    });
  }

}

export default new Navigation();