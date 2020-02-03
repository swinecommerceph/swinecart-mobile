import React, { Fragment, memo } from 'react';
import {
  TopNavigation, withStyles
} from '@ui-kitten/components';

import { colors, textStyles, shadowStyles } from 'constants/theme';

function HeaderBar(props) {

  const {
    title, hasShadow = false, leftControl = null, rightControls = null,
    backgroundColor = 'primary',
    themedStyle
  } = props;

  const headerBarStyle = [
    { backgroundColor: colors[backgroundColor] },
    hasShadow && shadowStyles.shadow1,
  ];

  return (
    <Fragment>
      <TopNavigation
        style={headerBarStyle}
        title={title}
        titleStyle={themedStyle.titleStyle}
        alignment='center'
        leftControl={leftControl}
        rightControls={rightControls}
      />
    </Fragment>
  )

}

export default withStyles(memo(HeaderBar, () => true), theme => ({
  headerBar: {
    backgroundColor: colors.primary,
  },
  titleStyle: {
    ...textStyles.headline,
    color: colors.white1
  },
}));