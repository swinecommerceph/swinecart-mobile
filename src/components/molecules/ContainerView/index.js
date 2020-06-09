import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { withStyles } from '@ui-kitten/components';

import { colors, sizes } from 'constants/theme';

function ContainerView(props) {

  const { 
    themedStyle, flex,
    backgroundColor = 'gray2',
    padding, paddingBottom = 1, paddingLeft, paddingRight, paddingTop, paddingHorizontal, paddingVertical,
    showsHorizontalScrollIndicator = true, 
    showsVerticalScrollIndicator = false, 
    ...restProps 
  } = props;

  const contentContainerStyle = [
    !flex && { flex: 0 },
    flex && { flex },
    padding && { padding: sizes.padding * padding },
    paddingBottom && { paddingBottom: sizes.padding * paddingBottom },
    paddingLeft && { paddingLeft: sizes.padding * paddingLeft },
    paddingRight && { paddingRight: sizes.padding * paddingRight },
    paddingTop && { paddingTop: sizes.padding * paddingTop },
    paddingHorizontal && { paddingHorizontal: sizes.padding * paddingHorizontal },
    paddingVertical && { paddingVertical: sizes.padding * paddingVertical },
  ];

  const scrollViewStyle = [
    themedStyle.container,
    { backgroundColor: colors[backgroundColor] }
  ];

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      style={scrollViewStyle}
      bounces={false}
      bouncesZoom={false}
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      // showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...restProps}
    />
  )

}

export default withStyles(memo(ContainerView), () => ({
  container: {
    flex: 1,
    width: '100%'
  }
}));