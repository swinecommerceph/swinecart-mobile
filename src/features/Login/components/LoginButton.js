import React, { memo } from 'react';

import { Block, Button } from 'shared';

function LoginButton({ disabled, onSubmit }) {
  return (
    <Block marginTop={1}>
      <Button
        size='medium'
        disabled={disabled}
        onPress={onSubmit}
      >
        Login
      </Button>
    </Block>
  );
}

export default memo(LoginButton);