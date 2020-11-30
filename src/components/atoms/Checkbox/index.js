import React, { memo } from 'react';
import { CheckBox as UKCheckbox } from '@ui-kitten/components';
import isEqual from 'react-fast-compare';

function Checkbox(props) {

  const {
    name, children, formControl
  } = props;

  const {
    values,
    setFieldValue,
   } = formControl;

  const onChange = checked => {
    setFieldValue(name, checked);
  };

  return (
    <UKCheckbox
      checked={values[name]}
      onChange={onChange}
    >
      {children}
    </UKCheckbox>
  );
}

export default memo(Checkbox, (props, nextProps) => {
  const name = props.name;
  const valueEqual = isEqual(props.formControl.values[name], nextProps.formControl.values[name]);
  return valueEqual;
});