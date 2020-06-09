import React, { Fragment, memo } from 'react';
import { TopNavigation, Text, Divider } from '@ui-kitten/components';

import { colors, textStyles } from 'constants/theme';

const headerBarStyle = {
  backgroundColor: colors.primary
};

const titleStyle = {
  ...textStyles.headline,
  color: colors.white1,
  textAlign: 'left'
};

function HeaderBar(props) {

  const {
    title,
  } = props;

  return (
    <Fragment>
      <TopNavigation
        style={headerBarStyle}
        title={
          evaProps => (
            <Text {...evaProps} style={[evaProps.style, titleStyle]}>
              {title}
            </Text>
          )
        }
        alignment='start'
      />
      <Divider />
    </Fragment>
  )

}

export default memo(HeaderBar, () => true);