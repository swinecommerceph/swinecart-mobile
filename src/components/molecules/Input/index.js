import React, { useMemo, useCallback, memo, useState } from 'react';
import { withStyles, Input as UKInput } from '@ui-kitten/components';
import isEqual from 'react-fast-compare';

import { sizes, colors } from 'constants/theme';

import { computeLineHeight } from 'utils';

import { Icon } from 'atoms';

function Input(props) {

  const [ isVisible, setIsVisible ] = useState(true);

  const {
    name, values, touched, errors, label, placeholder,
    onChange, isPassword,
    eva,
    ...otherProps
  } = props;

  
  const hasError = useMemo(() => !!(errors[name]), [ errors[name] ]);

  const onChangeText = useCallback(value => {
    onChange(name, value);
  }, [ values[name] ]);

  const renderIcon = () => (
    <Icon 
      name={ isVisible ? 'eye' : 'eye-off' } 
      size={26} 
      color={colors.gray5}
      marginHorizontal={0.5}
    />
  );

  const onIconPress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <UKInput
      size='small'
      placeholder={placeholder}
      label={label}
      status={hasError ? 'danger' : 'primary'}
      caption={hasError ? errors[name] : null}
      value={`${values[name] || ''}`}
      style={eva.style.input}
      textStyle={eva.style.inputText}
      labelStyle={eva.style.labelText}
      captionTextStyle={eva.style.captionText}
      onChangeText={onChangeText}
      icon={isPassword ? renderIcon : null}
      onIconPress={isPassword ? onIconPress : null}
      secureTextEntry={isPassword ? isVisible : false}
      {...otherProps}
    />
  );

}

export default withStyles(memo(Input, isEqual), () => ({
  input: {
    marginBottom: sizes.margin
  },
  inputText: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: computeLineHeight(16)
  },
  labelText: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    color: colors.primary,
    fontSize: 14,
    lineHeight: computeLineHeight(14)
  },
  captionText: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: computeLineHeight(14)
  }
}));