import React, { memo, useCallback, useMemo } from 'react';
import { Select as UKSelect, withStyles } from '@ui-kitten/components';
import find from 'lodash/find';

import { colors } from 'constants/theme';
import { computeLineHeight } from 'utils';

function Select(props) {

  const {
    name, data,
    values, setFieldValue,
    label, placeholder,
    themedStyle
  } = props;

  const options = useMemo(() => {
    return data.map(v => {
      v.textStyle = themedStyle.textStyle;
      return v;
    });
  }, [data]);

  const onSelect = useCallback(val => {
    const element = find(options, [ 'key', val.key]);
    setFieldValue(name, element);
  }, [values[name]]);

  return (
    <UKSelect
      size='small'
      label={label}
      placeholder={placeholder}
      data={options}
      selectedOption={values[name]}
      onSelect={onSelect}
      textStyle={themedStyle.textStyle}
      style={themedStyle.select}
      controlStyle={themedStyle.control}
      labelStyle={themedStyle.labelText}
    />
  );
}

export default withStyles(memo(Select), () => ({
  textStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: computeLineHeight(14)
  },
  labelText: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    color: colors.primary,
    fontSize: 14,
    lineHeight: computeLineHeight(14)
  },
  select: {
    // height: 56,
    // width: '100%'
  },
  control: {
    height: 56,
    // width: '100%'
  },
}));