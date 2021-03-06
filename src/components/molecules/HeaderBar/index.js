import React, { Fragment, memo } from 'react';
import { TopNavigation, Divider } from '@ui-kitten/components';

import { colors } from 'constants/theme';

import { Text } from 'atoms';

const headerBarStyle = {
  backgroundColor: colors.primary
};

function HeaderBar(props) {

  const {
    title, accessoryLeft, accessoryRight
  } = props;

  return (
    <Fragment>
      <TopNavigation
        style={headerBarStyle}
        accessoryLeft={accessoryLeft}
        accessoryRight={accessoryRight}
        title={
          <Text semibold size={16} color='white1' textAlign='left'>
            {title}
          </Text>
        }
        alignment='start'
      />
    </Fragment>
  )

}

export default memo(HeaderBar);