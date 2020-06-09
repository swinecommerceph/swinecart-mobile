import React, { Fragment, memo } from 'react';
import {
  TopNavigation, withStyles
} from '@ui-kitten/components';

import { colors, textStyles, shadows } from 'constants/theme';

function HeaderBar(props) {

  const {
    title, leftControl = null, rightControls = null,
    backgroundColor = 'primary',
    themedStyle
  } = props;

  const headerBarStyle = [
    { backgroundColor: colors[backgroundColor] }
  ];

  return (
    <Fragment>
      <TopNavigation
        style={headerBarStyle}
        title={title}
        titleStyle={themedStyle.titleStyle}
        alignment='start'
        leftControl={leftControl}
        rightControls={rightControls}
      />
    </Fragment>
  )

}

export default withStyles(memo(HeaderBar, () => true), () => ({
  headerBar: {
    backgroundColor: colors.primary,
    ...shadows.shadow1
  },
  titleStyle: {
    ...textStyles.headline,
    color: colors.white1
  },
}));