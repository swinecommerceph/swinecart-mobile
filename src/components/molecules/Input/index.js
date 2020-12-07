import React, { useMemo, useCallback, memo, useState, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import isEqual from 'react-fast-compare';
import {
  withStyles,
  Input as UKInput,
} from '@ui-kitten/components';

import toString from 'lodash/toString';

import { computeLineHeight } from 'utils';

import { Icon } from 'atoms';

import {
  Label,
  ErrorMessage
} from './components';

function Input(props) {

  const [ isVisible, setIsVisible ] = useState(true);

  const {
    name,
    label,
    formControl,
    required = false,
    optional = false,
    isPassword,
    width = '100%',
    eva: { style },
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

  const onChangeText = useCallback(value => {
    setFieldValue({ name, value });
  }, [ values[name] ]);

  const onBlur = useCallback(() => {
    setFieldTouched({ name, value: true });
  }, []);

  const onIconPress = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

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

  const containerStyle = [ { width }];

  return (
    <Fragment>
      <Label
        label={label}
        required={required}
        optional={optional}
      />
      <UKInput
        label={null}
        caption={
          <ErrorMessage
            hasError={hasError}
            errorMessage={errors[name]}
          />
        }
        status={hasError ? 'danger' : 'basic'}
        value={toString(values[name])}
        textStyle={style.inputText}
        onChangeText={onChangeText}
        onBlur={onBlur}
        accessoryRight={isPassword ? renderIcon : null}
        secureTextEntry={isPassword ? isVisible : false}
        style={containerStyle}
        {...otherProps}
      />
    </Fragment>
  );
}

export default withStyles(memo(Input, (props, nextProps) => {
  const name = props.name;
  const valueEqual = isEqual(props.formControl.values[name], nextProps.formControl.values[name]);
  const errorEqual = isEqual(props.formControl.errors[name], nextProps.formControl.errors[name]);
  const touchEqual = isEqual(props.formControl.touched[name], nextProps.formControl.touched[name]);
  const disabEqual = isEqual(props.disabled, nextProps.disabled);
  return valueEqual && errorEqual && touchEqual && disabEqual;
}), () => ({
  inputText: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: computeLineHeight(14)
  },
}));