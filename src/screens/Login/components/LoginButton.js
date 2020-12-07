import React, { memo } from 'react';

import { Button } from 'atoms';

function LoginButton({ onSubmit }) {
  return (
    <Button size='medium' onPress={onSubmit} marginTop={1}>
      Login
    </Button>
  );
}

export default memo(LoginButton);