import React, { memo } from 'react';

import { Button } from 'atoms';

function LoginButton({ disabled, onSubmit }) {
  return (
    <Button
      size='medium'
      disabled={disabled}
      onPress={onSubmit}
      marginTop={1}
    >
      Login
    </Button>
  );
}

export default memo(LoginButton);