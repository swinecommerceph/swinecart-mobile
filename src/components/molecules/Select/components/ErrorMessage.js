import React, { memo } from 'react';

import { Text } from 'atoms';

function ErrorMessage({ errorMessage, hasError }) {
  return (
    hasError &&
    <Text semibold size={12} color='danger'>
      {errorMessage}
    </Text>
  );
}

export default memo(ErrorMessage);