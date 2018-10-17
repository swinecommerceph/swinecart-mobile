import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import  {
  StyleProvider, Text, View, Container
} from 'native-base'

import {
  observer, inject
} from 'mobx-react';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import {
  Navigation
} from '../../../services';

class Conversations extends Component {

  componentDidMount() {
    Navigation.navigate('Chat');
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <View>
            <Text>Conversations!</Text>
          </View>
        </Container>
      </StyleProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  }
});

export default Conversations;