import React, { Fragment, memo, useEffect } from 'react';

import { HeaderBarButton } from 'molecules';

function EditButton() {
  const onPressEdit = () => {

  };
  return (
    <HeaderBarButton
      iconName='edit-2'
      onPress={onPressEdit}
    />
  );
}

export default memo(EditButton);