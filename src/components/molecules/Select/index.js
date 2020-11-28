import React, { Fragment, memo, useState } from 'react';
import {
  Select as UKSelect,
  SelectItem as UKSelectItem,
  withStyles
} from '@ui-kitten/components';

import { Text } from 'atoms';

function Select(props) {

  const [selectedIndex, setSelectedIndex] = useState(null);

  const {
    options, label, valueProp = 'title', uniqueId = 'id',
    required = false, optional = false,
    name, values, touched, errors, onChange, onBlur,
    placeholder,
    multiSelect,
    eva,
    ...otherProps
  } = props;

  const onTouched = () => {
    onBlur(name, true);
  };

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

    onChange(name, value);

  };

  const hasError = !!errors[name] && !!touched[name];

  const value = values[name] ? values[name][valueProp] : placeholder;

  return (
    <UKSelect
      value={<Text semibold>{value}</Text>}
      label={
        <Fragment>
          <Text semibold size={12}>{label}</Text>
          {required && <Text italic size={12}>{' - Required'}</Text>}
          {optional && <Text italic size={12}>{' - Optional'}</Text>}
        </Fragment>
      }
      caption={
        hasError &&
        <Text semibold size={12} color='danger'>
          {errors[name]}
        </Text>
      }
      status={hasError ? 'danger' : 'basic'}
      style={eva.style.selectContainer}
      selectedIndex={selectedIndex}
      multiSelect={multiSelect}
      placeholder={placeholder}
      onBlur={onTouched}
      onSelect={onSelect}
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
  );
}

export default withStyles(memo(Select), () => ({
  selectContainer: {
    minWidth: 200,
  }
}));