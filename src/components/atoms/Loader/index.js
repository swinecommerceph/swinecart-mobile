import React, { memo } from 'react';
import { Spinner } from '@ui-kitten/components';

function Loader({...props}) {

  return (
    <Spinner {...props} />
  );

}

export default memo(Loader, () => true);