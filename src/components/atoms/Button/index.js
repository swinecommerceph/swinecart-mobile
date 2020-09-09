import React, { memo } from 'react';
import { Button as UKButton } from '@ui-kitten/components';

import { sizes } from 'constants/theme';

import Text from '../Text';

function Button(props) {

  const {
    padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingHorizontal, paddingVertical,
    margin, marginBottom, marginLeft, marginRight, marginTop, marginHorizontal, marginVertical,
    style, children,
    appearance = 'filled', status = 'primary',
    ...otherProps
  } = props;

  const buttonStyle = [

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

  const color =
    appearance === 'outline'
      ? status
      : status === 'basic'
        ? 'black1'
        : appearance === 'ghost' ? 'primary' : 'white1';

  return (
    <UKButton
      appearance={appearance}
      status={status}
      style={buttonStyle} 
      {...otherProps}
    >
      <Text semibold color={color} size={16}>{children}</Text>
    </UKButton>
  );
}

export default memo(Button);