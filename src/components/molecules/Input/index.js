import React, { useMemo, useCallback, memo, useState, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { withStyles, Input as UKInput } from '@ui-kitten/components';
import isEqual from 'react-fast-compare';
import toString from 'lodash/toString';

import { computeLineHeight } from 'utils';

import { Block, Icon, Text } from 'atoms';

function Input(props) {

  const [ isVisible, setIsVisible ] = useState(true);

  const {
    name, values, touched, errors, label, placeholder, 
    required = false, optional = false,
    onChange, onBlur, isPassword, size = 'medium',
    width = '100%',
    eva: { style },
    ...otherProps
  } = props;


  // const hasError = useMemo(() => !!errors[name] , [ errors[name] ]);

  const hasError = !!errors[name] && !!touched[name];

  console.dir(touched);
  // console.dir(name, hasError, touched[name], !!errors[name]);

  const onChangeText = useCallback(value => {
    onChange(name, value);
  }, [ values[name] ]);

  const onTouched = () => {
    onBlur(name, true);
  };

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

  const containerStyle = [
    { width }
  ];

  return (
    <Fragment>
      <Block row marginBottom={0.5}>
        <Text semibold size={12}>{label}</Text>
        {required && <Text italic size={12}>{' - Required'}</Text>}
        {optional && <Text italic size={12}>{' - Optional'}</Text>}
        </Block>
       <UKInput
        size={size}
        placeholder={placeholder}
        label={null}
        caption={
          hasError &&
          <Text semibold size={12} color='danger'>
            {errors[name]}
          </Text>
        }
        status={hasError ? 'danger' : 'basic'}
        value={toString(values[name])}
        textStyle={style.inputText}
        onChangeText={onChangeText}
        onBlur={onTouched}
        accessoryRight={isPassword ? renderIcon : null}
        secureTextEntry={isPassword ? isVisible : false}
        style={containerStyle}
        {...otherProps}
      />
    </Fragment>
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