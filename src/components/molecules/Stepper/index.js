import React, { Fragment, memo } from 'react';
import NumberStepper from 'react-native-custom-stepper';

import { colors } from 'constants/theme';

function Stepper(props) {

  return (
    <Fragment>
      <NumberStepper
        {...props}
        maxValue={10000}
        buttonsFontSize={25}
        buttonsBackgroundColor={colors.primary}
        // labelBackgroundColor={colors.primary}
      />
    </Fragment>
  );
}

export default memo(Stepper);