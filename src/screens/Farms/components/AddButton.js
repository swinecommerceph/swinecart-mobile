import React, { Fragment, memo, useEffect } from 'react';

import { HeaderBarButton } from 'molecules';

function AddButton() {
  const onPressAdd = () => {

  };
  return (
    <HeaderBarButton
      iconName='plus'
      onPress={onPressAdd}
    />
  );
}

export default memo(AddButton);