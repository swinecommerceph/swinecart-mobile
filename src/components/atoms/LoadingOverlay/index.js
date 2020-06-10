import React, { memo } from 'react';
import { withStyles, Spinner } from '@ui-kitten/components';
import RNSpinner from 'react-native-loading-spinner-overlay';

function LoadingOverlay(props) {

  const {
    show,
    eva
  } = props;

  return (
    <RNSpinner
      visible={show}
      customIndicator={<Spinner size='giant' />}
      textStyle={eva.style.textStyle}
    />
  );

}

export default withStyles(memo(LoadingOverlay), () => ({
  textStyle: {
    fontFamily: 'OpenSans-SemiBold',
  }
}));

