class Navigation {

  navigatorRef;

  setNavigatorRef = ref => {
    this.navigatorRef = ref;
  }

  navigate = (routeName, params) => {
    this.navigatorRef.navigate(routeName, params);
  }

  back = () => {
    this.navigatorRef.dispatch(NavigationActions.back());
  }

}

export default new Navigation();