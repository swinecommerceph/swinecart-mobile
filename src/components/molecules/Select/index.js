import React, { Fragment, memo, useMemo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';
import {
  Select as UKSelect,
  SelectItem as UKSelectItem,
  withStyles
} from '@ui-kitten/components';

import { Text } from 'atoms';

import {
  Label,
  ErrorMessage
} from './components';

function Select(props) {

  const [selectedIndex, setSelectedIndex] = useState(null);

  const {
    name,
    label,
    placeholder,
    formControl,
    multiSelect = false,
    required = false,
    optional = false,
    options,
    valueProp = 'title',
    uniqueId = 'id',
    eva,
    ...otherProps
  } = props;

  const {
    values,
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
  } = formControl;

  const hasError = useMemo(
    () => !!errors[name] && !!touched[name],
    [touched[name], errors[name]]
  );

  const onBlur = useCallback(() => {
    setFieldTouched(name, true);
  }, []);

  const onSelect = index => {
    setSelectedIndex(index);
    const value = multiSelect
      ?
        index.length === 0
          ? null
          : index.map(option => options[option.row])
      :
        index
          ? options[index.row]
          : null;
    setFieldValue({ name, value });

  };

  const displayValue = multiSelect
    ? values[name] && values[name].length > 0
        ? values[name].map(option => option[valueProp]).join(', ')
        : placeholder
    : values[name]
      ? values[name][valueProp]
      : placeholder;

  return (
    <Fragment>
      <Label
        label={label}
        required={required}
        optional={optional}
      />
      <UKSelect
        value={<Text semibold>{displayValue}</Text>}
        label={null}
        caption={
          <ErrorMessage
            hasError={hasError}
            errorMessage={errors[name]}
          />
        }
        status={hasError ? 'danger' : 'basic'}
        selectedIndex={selectedIndex}
        onBlur={onBlur}
        onSelect={onSelect}
        multiSelect={multiSelect}
        style={eva.style.selectContainer}
        {...otherProps}
      >
        {options.map((option) => {

          const {
            key
          } = option

          return (
            <UKSelectItem
              key={key ? key : option[uniqueId]}
              title={<Text semibold>{option[valueProp]}</Text>}
            />
          );
        })}
      </UKSelect>
    </Fragment>
  );
}

export default withStyles(memo(Select, (props, nextProps) => {
  const name = props.name;
  const valueEqual = isEqual(props.formControl.values[name], nextProps.formControl.values[name]);
  const errorEqual = isEqual(props.formControl.errors[name], nextProps.formControl.errors[name]);
  const touchEqual = isEqual(props.formControl.touched[name], nextProps.formControl.touched[name]);
  return valueEqual && errorEqual && touchEqual;
}), () => ({
  selectContainer: {
    minWidth: 200,
  }
}));