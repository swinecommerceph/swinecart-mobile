import React, { useMemo, useCallback, memo, useState, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { withStyles, Input as UKInput } from '@ui-kitten/components';
import isEqual from 'react-fast-compare';

import { computeLineHeight } from 'utils';

import { Icon, Text } from 'atoms';

function Input(props) {

  const [ isVisible, setIsVisible ] = useState(true);

  const {
    name, values, touched, errors, label, placeholder, 
    required = false, optional = false, 
    onChange, isPassword,
    eva: { style },
    ...otherProps
  } = props;


  const hasError = useMemo(() => !!(errors[name]), [ errors[name] ]);

  const onChangeText = useCallback(value => {
    onChange(name, value);
  }, [ values[name] ]);

  const onIconPress = () => {
    setIsVisible(!isVisible);
  };

  const renderIcon = () => (
    <TouchableOpacity onPress={onIconPress} activeOpacity={1.0}>
      <Icon
        name={isVisible ? 'eye' : 'eye-off'}
        size={26}
        color='gray5'
        marginHorizontal={0.5}
      />
    </TouchableOpacity>
  );

  return (
    <UKInput
      size='medium'
      placeholder={placeholder}
      label={
        <Fragment>
          <Text semibold size={12}>{label}</Text>
          {required && <Text italic size={12}>{' - Required'}</Text>}
          {optional && <Text italic size={12}>{' - Optional'}</Text>}
        </Fragment>
      }
      caption={
        <Text semibold size={12} color={hasError ? 'danger' : 'primary'}>
          {hasError ? errors[name] : null}
        </Text>
      }
      status={hasError ? 'danger' : 'primary'}
      value={`${values[name] || ''}`}
      textStyle={style.inputText}
      onChangeText={onChangeText}
      accessoryRight={isPassword ? renderIcon : null}
      secureTextEntry={isPassword ? isVisible : false}
      {...otherProps}
    />
  );

}

export default withStyles(memo(Input, isEqual), () => ({
  inputText: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: computeLineHeight(14)
  },
}));