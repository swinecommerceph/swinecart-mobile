import React, {  memo, useMemo } from 'react';
import { withStyles, Text as UKText } from '@ui-kitten/components';

import { colors, sizes } from 'constants/theme';

function Text(props) {

  const {
    size,
    color,
    normal, semibold, bold, italic,
    textAlign,
    padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingHorizontal, paddingVertical,
    margin, marginBottom, marginLeft, marginRight, marginTop, marginHorizontal, marginVertical,
    themedStyle, ...otherProps 
  } = props;

  const lineHeight = useMemo(() => {
    return ~~(size * 1.618) 
  }, [ size ]);

  const textStyles = [
    size && { fontSize: size, lineHeight },
    color && { color: colors[color] },
    normal && themedStyle.normal,
    !normal && themedStyle.normal,
    semibold && themedStyle.semibold,
    bold && themedStyle.bold,
    italic && themedStyle.italic,

    textAlign && { textAlign },

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
    <UKText 
      {...otherProps}
      style={textStyles}
    />
  );  

}

export default withStyles(memo(Text), () => ({
  bold: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'normal',
  },
  semibold: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
  },
  normal: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: 'normal',
  },
  italic: {
    fontFamily: 'OpenSans-Italic',
    fontWeight: 'normal',
  }
}));