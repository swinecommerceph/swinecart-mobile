import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Text, Icon, Left, 
  Button, Right,
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import Products from '../components/Products';

@inject(['ProductsStore'])
@observer
class ManageProducts extends Component {

  componentDidMount() {
    this.props.ProductsStore.getProducts(1);
  }

  handleSelectAll = () => {
    const { ProductsStore } = this.props;
    ProductsStore.setIsChecked(true);
  }

  render() {

    const {
      openSansBold, contentStyle
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Left style={[contentStyle]}>
              <Button transparent onPress={this.handleSelectAll}>
                <Icon type='Feather' name='plus' style={{ color: '#000000' }}/>
              </Button>
            </Left>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Products
              </Title>
            </Body>
            <Right style={[contentStyle]}>
              <Button transparent>
                <Icon type='Feather' name='filter' style={{ color: '#000000' }}/>
              </Button>
            </Right>
          </Header>
          <Content padder>
            <Products />
          </Content>
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

export default ManageProducts;