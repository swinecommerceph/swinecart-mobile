import React, { Component } from 'react';

import {
  StyleSheet, Image
} from 'react-native';

import {
  View, Text, Card, CardItem, Body, Left, Right, Button, ListItem, CheckBox,
  Icon
} from 'native-base';

import FastImage from 'react-native-fast-image';

import {
  observer, inject
} from 'mobx-react';


@inject('ProductsStore')
@observer
class Product extends Component {

  handleDelete = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.deleteProduct(product);
  };

  handleStatusToggle = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.toggleStatus(product);
  }

  handleChecked = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.toggleCheck(product);
  }

  render() {

    const {
      product
    } = this.props;

    const {
      name, type, breed, age, adg, backfat_thickness, fcr, img_path, status,
      isChecked
    } = product;

    const {
      openSansBold, openSansSemiBold, cardStyle, container
    } = styles;

    return (
      <Card style={[cardStyle]}>
        <CardItem>
          <Left>
            <Text style={[openSansBold, { fontSize: 21 }]}>{name}</Text>
          </Left>
          <Right>
            <Button bordered small style={{ borderColor: '#000000' }}>
              <Text style={[openSansBold, { color: '#000000' }]}>View All Info</Text>
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody style={[container]}>
          <FastImage
            style={{ width: 200, height: 200 }}
            source={{
              uri: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-full-body.adapt.945.1.jpg',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text style={[openSansBold, { fontSize: 16 }]}>{type}</Text>
          </Left>
          <Right>
            <Text style={[openSansBold, { fontSize: 16 }]}>{breed}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Text style={[openSansBold, { fontSize: 16 }]}>Age</Text>
          </Left>
          <Right>
            <Text style={[openSansBold, { fontSize: 16 }]}>{age} years old</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left style={{ flex: 1 }}>
            <Text style={[openSansBold, { fontSize: 13 }]}>Average Daily Gain (g):
              <Text style={[openSansBold, { fontSize: 14, color: '#00af66' }]}> {adg}</Text>
            </Text>
          </Left>
          <Body style={{ flex: 1 }}>
            <Text style={[openSansBold, { fontSize: 13 }]}>Feed Conversion Ratio:
              <Text style={[openSansBold, { fontSize: 14, color: '#00af66' }]}> {fcr}</Text>
            </Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Text style={[openSansBold, { fontSize: 13 }]}>Backfat Thickness (mm):
              <Text style={[openSansBold, { fontSize: 14, color: '#00af66' }]}> {backfat_thickness}</Text>
            </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left style={{ flex: 1 }}>
            <CheckBox checked={isChecked} color='#000000' onPress={this.handleChecked}/>
          </Left>
          <Right style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <Button transparent>
                <Icon type='Feather' name='edit' style={{ color: '#000000', fontSize: 22 }} />
              </Button>
              {
                (status === 'displayed' || status === 'hidden') 
                  ?
                    <Button transparent onPress={this.handleStatusToggle}>
                        <Icon type='Feather' name={status === 'displayed' ? 'eye-off' : 'eye'} style={{ color: '#000000', fontSize: 22 }} />
                    </Button>
                  :
                    null 
              }
              <Button transparent onPress={this.handleDelete}>
                <Icon type='Feather' name='trash' style={{ color: '#000000', fontSize: 22 }} />
              </Button>
           </View>
          </Right>
        </CardItem>
      </Card>
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
  },
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  }
});

export default Product;