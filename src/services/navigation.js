class Navigation {

  navigatorRef;

  setNavigatorRef = ref => {
    this.navigatorRef = ref;
  }

  navigate = (routeName, params) => {
    this.navigatorRef.navigate(routeName, params);
  }

  back = () => {
    this.navigatorRef.goBack();
  }

}

export default new Navigation();