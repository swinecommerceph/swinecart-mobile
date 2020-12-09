import React, { memo } from 'react';
import { Dimensions } from 'react-native';

import {
  Calendar as UKCalendar
} from '@ui-kitten/components';

function Calendar(props) {

  const screenWidth = Math.round(Dimensions.get('window').width);

  const style = {
    width: screenWidth - 32,
    minWidth: screenWidth - 32,
  };

  return (
    <UKCalendar
      style={style}
      {...props}
    />
  );
}

export default memo(Calendar);