import React, { memo, useMemo, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { withStyles, OverflowMenu } from '@ui-kitten/components';
import { shadows } from 'constants/theme';

import {
  HeaderBarButton
} from 'molecules';

function Settings(props) {

  const logoutUser = useStoreActions(actions => actions.auth.logout);

  const [isVisible, setVisible] = useState(false);

  const { 
    themedStyle
  } = props;

  const menu = useMemo(() => {
    return [
      { title: 'Logout', onPress: () => logoutUser(), textStyle: {
        fontFamily: 'OpenSans-SemiBold',
      } },
    ];
  }, []);
 
  const toggleMenu = () => {
    setVisible(!isVisible);
  };

  const onSelect = index => {
    menu[index].onPress();
    setVisible(false);
  };

  return (
    <OverflowMenu
      visible={isVisible}
      data={menu}
      onSelect={onSelect}
      style={themedStyle.menuStyle}
      onBackdropPress={toggleMenu}
    >
      <HeaderBarButton
        onPress={toggleMenu}
        iconName='more-vertical'
      />
    </OverflowMenu>
  )

}

export default withStyles(memo(Settings), () => ({
  menuStyle: {
    ...shadows.shadow1,
  }
}));