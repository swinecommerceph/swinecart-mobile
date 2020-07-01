import React, { memo } from 'react';
import { Select as UKSelect, SelectItem as UKSelectItem, withStyles } from '@ui-kitten/components';

import { Text } from 'atoms';

function Select(props) {

  const { 
    options, selectedIndex, label, valueProp = 'title', uniqueId = 'id',
    placeholder,
    multiSelect,
    eva,
    ...otherProps
  } = props;

  const value = multiSelect
    ? 
      selectedIndex.length === 0
        ? placeholder
        : selectedIndex.map(option => options[option.row][valueProp]).join(',')
    : options[selectedIndex.row][valueProp];

  return (
    <UKSelect
      value={<Text semibold>{value}</Text>}
      label={<Text semibold size={12}>{label}</Text>}
      style={eva.style.selectContainer}
      selectedIndex={selectedIndex}
      multiSelect={multiSelect}
      placeholder={placeholder}
      {...otherProps}
    >
      {options.map(option => {

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