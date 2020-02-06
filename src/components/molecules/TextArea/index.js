import React, { memo } from 'react';
import { Input } from '@ui-kitten/components';

function TextArea(props) {
  return (
    <Input
      multiline={true}
      numberOfLines={4}
      {...props}
    />
  );

}

export default memo(TextArea);