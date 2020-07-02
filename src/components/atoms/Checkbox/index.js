import React, { Fragment, memo, } from 'react';
import { CheckBox as UKCheckbox, withStyles } from '@ui-kitten/components';

function Checkbox(props) {

  const {
    text, onChange, values, name,
    eva
  } = props;

  const onPressChange = checked => {
    onChange(name, checked);
  };

  return (
    <UKCheckbox
      text={text}
      checked={values[name]}
      onChange={onPressChange}
      textStyle={eva.style.text}
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