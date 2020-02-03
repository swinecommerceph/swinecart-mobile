import React, { memo } from 'react';
import { withStyles } from '@ui-kitten/components';
import { View } from 'react-native';
import { sizes, colors, shadows } from 'constants/theme';

function Block(props) {

  const {
    flex, flexGrow, flexShrink, overflow,
    row, center, left, middle, right, alignSelf, space, shadow,
    width, maxWidth, minWidth,
    height, maxHeight, minHeight,
    padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingHorizontal, paddingVertical,
    margin, marginBottom, marginLeft, marginRight, marginTop, marginHorizontal, marginVertical,
    borderRadius,
    borderBottomRadius,
    borderTopRadius,
    borderWidth, borderColor,
    backgroundColor, borderBottomWidth, borderBottomColor,
    themedStyle, children
  } = props;

  const blockStyle = [
    themedStyle.defaultStyle,
    !flex && { flex: 0 },
    flex && { flex },
    flexGrow && { flexGrow },
    flexShrink && { flexShrink },
    space && { justifyContent: `space-${space}` },
    row && themedStyle.row,
    center && themedStyle.center,
    left && themedStyle.left,
    middle && themedStyle.middle,
    right && themedStyle.right,
    alignSelf && { alignSelf },

    shadow && { ...shadows[shadow] },

    backgroundColor && { backgroundColor: colors[backgroundColor] },

    overflow && { overflow },

    width && { width },
    height && { height },
    maxHeight && { maxHeight },
    maxWidth && { maxWidth },

    minHeight && { minHeight },
    minWidth && { minWidth },

    borderRadius && { borderRadius },
    borderBottomRadius && { borderBottomLeftRadius: borderBottomRadius, borderBottomRightRadius: borderBottomRadius, },
    borderTopRadius && { borderTopLeftRadius: borderTopRadius, borderTopRightRadius: borderTopRadius, },

    borderBottomWidth && { borderBottomWidth },
    borderBottomColor && { borderBottomColor: colors[borderBottomColor] },

    borderWidth && { borderWidth },
    borderColor && { borderColor: colors[borderColor] },

    padding && { padding: sizes.padding * padding },
    paddingBottom && { paddingBottom: sizes.padding * paddingBottom },
    paddingLeft && { paddingLeft: sizes.padding * paddingLeft },
    paddingRight && { paddingRight: sizes.padding * paddingRight },
    paddingTop && { paddingTop: sizes.padding * paddingTop },
    paddingHorizontal && { paddingHorizontal: sizes.padding * paddingHorizontal },
    paddingVertical && { paddingVertical: sizes.padding * paddingVertical },

    margin && { margin: sizes.margin * margin },
    marginBottom && { marginBottom: sizes.margin * marginBottom },
    marginLeft && { marginLeft: sizes.margin * marginLeft },
    marginRight && { marginRight: sizes.margin * marginRight },
    marginTop && { marginTop: sizes.margin * marginTop },
    marginHorizontal && { marginHorizontal: sizes.margin * marginHorizontal },
    marginVertical && { marginVertical: sizes.margin * marginVertical },

  ];

  return (
    <View style={blockStyle}>
      {children}
    </View>
  );

}

export default withStyles(memo(Block), () => ({
  defaultStyle: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center'
  },
  left: {
    justifyContent: 'flex-start',
  },
  middle: {
    justifyContent: 'center'
  },
}));