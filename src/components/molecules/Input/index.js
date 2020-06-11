import React, { useMemo, useCallback, memo, useState } from 'react';
import { withStyles, Input as UKInput } from '@ui-kitten/components';
import isEqual from 'react-fast-compare';

import { colors } from 'constants/theme';

import { computeLineHeight } from 'utils';

import { Icon, Text } from 'atoms';

function Input(props) {

  const [ isVisible, setIsVisible ] = useState(true);

  const {
    name, values, touched, errors, label, placeholder,
    onChange, isPassword,
    eva: { style },
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
      size='medium'
      placeholder={placeholder}
      label={<Text semibold size={12}>{label}</Text>}
      caption={
        <Text semibold size={12} color={hasError ? 'danger' : 'primary'}>
          {hasError ? errors[name] : null}
        </Text>
      }
      status={hasError ? 'danger' : 'primary'}
      value={`${values[name] || ''}`}
      style={style.input}
      textStyle={style.inputText}
      onChangeText={onChangeText}
      icon={isPassword ? renderIcon : null}
      onIconPress={isPassword ? onIconPress : null}
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