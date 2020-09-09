import React, { Fragment, memo, } from 'react';
import { CheckBox as UKCheckbox } from '@ui-kitten/components';

function Checkbox(props) {

  const {
    onChange, values, name, children,
  } = props;

  const onPressChange = checked => {
    onChange(name, checked);
  };

  return (
    <UKCheckbox
      checked={values[name]}
      onChange={onPressChange}
    >
      {children}
    </UKCheckbox>
  );
}

export default memo(Checkbox);