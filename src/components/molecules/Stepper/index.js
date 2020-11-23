import React, { Fragment, memo } from 'react';

import { colors } from 'constants/theme';

function Stepper(props) {

  return (
    <Fragment>
      {/* <NumberStepper
        {...props}
        maxValue={10000}
        buttonsFontSize={25}
        buttonsBackgroundColor={colors.primary}
        // labelBackgroundColor={colors.primary}
      /> */}
    </Fragment>
  );
}

export default memo(Stepper);