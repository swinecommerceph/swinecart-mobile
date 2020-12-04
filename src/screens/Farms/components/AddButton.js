import React, { Fragment, memo, useEffect } from 'react';

import { NavigationService } from 'services';

import { HeaderBarButton } from 'molecules';

function AddButton() {

  const onPressAdd = () => {
    NavigationService.navigate('FarmForm', { mode: 'add' })
  };

  return (
    <HeaderBarButton
      iconName='plus'
      onPress={onPressAdd}
    />
  );
}

export default memo(AddButton);