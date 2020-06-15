import React, { memo } from 'react';
import { Input, withStyles } from '@ui-kitten/components';
import { computeLineHeight } from 'utils';

import { Text } from 'atoms';

function TextArea(props) {

  const {
    eva, label,
    ...otherProps
  } = props;

  return (
    <Input
      multiline
      label={<Text semibold size={12}>{label}</Text>}
      textStyle={eva.style.textStyle}
      {...otherProps}
    />
  );

}

export default withStyles(memo(TextArea), () => ({
  textStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: computeLineHeight(14),
    minHeight: 64
  },
}));