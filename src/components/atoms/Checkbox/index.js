import React, { Fragment, memo, } from 'react';
import { CheckBox as UKCheckbox, withStyles } from '@ui-kitten/components';

function Checkbox(props) {

  const {
    text, onChange, values, name,
    themedStyle
  } = props;

  const onPressChange = checked => {
    onChange(name, checked);
  };

  return (
    <UKCheckbox
      text={text}
      style={{}}
      checked={values[name]}
      onChange={onPressChange}
      textStyle={themedStyle.text}
    />
  );
}

export default withStyles(memo(Checkbox), () => ({
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 14
  }
}));