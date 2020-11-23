import React, { memo } from 'react';
import { Spinner as UKSpinner } from '@ui-kitten/components';

function Spinner(props) {
  return (
    <UKSpinner {...props} />
  );
}

export default memo(Spinner);