import { 
  NavigationActions
} from 'react-navigation';

let _navigator ;

const navigation = {
  setTopLevelNavigator(ref) {
    _navigator = ref;
  },
  navigate(routeName, params) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  },
  back() {
    _navigator.dispatch(NavigationActions.back());
  },
  popToTop(immediate = true) {
    _navigator.dispatch({
      type: NavigationActions.POP_TO_TOP,
      immediate
    });
  },
  reset({ actions, index }) {
    _navigator.dispatch({
      type: NavigationActions.RESET
    });
  }
}

export default navigation;