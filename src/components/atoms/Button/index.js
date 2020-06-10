import React, { memo } from 'react';
import { withStyles, Button as UKButton } from '@ui-kitten/components';

import { sizes } from 'constants/theme';
import { computeLineHeight } from 'utils';

function Button(props) {

  const {
    padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingHorizontal, paddingVertical,
    margin, marginBottom, marginLeft, marginRight, marginTop, marginHorizontal, marginVertical,
    eva, style, ...otherProps
  } = props;

  console.dir(props);

  const buttonStyle = [
    eva.style.buttonStyle,

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
    style
  ];

  return (
    <UKButton
      // textStyle={eva.style.buttonText}
      // style={buttonStyle}
      {...props}
    />
  );
}

export default memo(Button);