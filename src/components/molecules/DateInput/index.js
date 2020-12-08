import React, { Fragment, memo, useMemo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import {
  withStyles,
  Datepicker as UKDatepicker,
  NativeDateService,
} from '@ui-kitten/components';

import { computeLineHeight } from 'utils';

import {
  Label,
  ErrorMessage
} from './components';

const formatDateService = new NativeDateService('en',  { format: 'MMMM DD, YYYY' });

function DateInput(props) {

  const {
    name,
    label,
    formControl,
    required = false,
    optional = false,
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

  const onSelect = useCallback(value => {
    setFieldValue({ name, value });
  }, [ values[name] ]);

  const onBlur = useCallback(() => {
    setFieldTouched({ name, value: true});
  }, []);

  const containerStyle = [ { width }];

  return (
    <Fragment>
      <Label
        label={label}
        required={required}
        optional={optional}
      />
      <UKDatepicker
        label={null}
        date={values[name]}
        caption={
          <ErrorMessage
            hasError={hasError}
            errorMessage={errors[name]}
          />
        }
        status={hasError ? 'danger' : 'basic'}
        onSelect={onSelect}
        onBlur={onBlur}
        textStyle={style.inputText}
        style={containerStyle}
        dateService={formatDateService}
        {...otherProps}
      />
    </Fragment>
  );
}

export default withStyles(memo(DateInput, (props, nextProps) => {
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