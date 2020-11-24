import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';
import { TouchableOpacity } from 'react-native';

import { Block, Icon, Text } from 'atoms';

import { NavigationService } from 'services';
import { formatCreatedAt } from 'utils/formatters';

const iconNames = {
  'ProductRequested': 'alert-circle',
  'ProductReserved': 'alert-circle',
  'BreederRated': 'star',
};

const iconColors = {
  'ProductRequested': 'color-info-500',
  'ProductReserved': 'color-primary-500',
  'BreederRated': 'color-warning-500',
};

function Notification({ data }) {

  const { message, readAt, createdAt, type } = data;

  const setIndex = useStoreActions(actions => actions.orders.setIndex);
  const setCurrentRoute = useStoreActions(actions => actions.dashboard.setCurrentRoute);

  const onPressNotification = () => {
    switch(type) {
      case 'ProductRequested': 
        setIndex(0);
        NavigationService.navigate('OrdersStack');
        break;
      case 'BreederRated': 
        setCurrentRoute('reviews');
        NavigationService.navigate('Dashboard'); 
        break;
    }
  };

  const textColor = readAt ? 'gray5': 'black1';

  return (
    <TouchableOpacity
      activeOpacity={0.90}
      onPress={onPressNotification}
    >
      <Block
        row center padding={1}
        backgroundColor='white1'
        borderBottomWidth={1}
        borderBottomColor='gray1'
      > 
        {/* <Icon name={iconNames[type]} color={readAt ? 'gray5' : iconColors[type]} size={30}/> */}
        <Block flex={1} marginLeft={1}>
          <Text semibold size={13} numberOfLines={3} color={textColor}>
            {message}
          </Text>
          <Text normal size={12} color={textColor}>
            {formatCreatedAt(createdAt)}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );

}

export default memo(Notification);