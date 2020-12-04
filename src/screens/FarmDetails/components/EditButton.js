import React, { Fragment, memo, useEffect } from 'react';

import { NavigationService } from 'services';

import { HeaderBarButton } from 'molecules';

function EditButton() {

  const onPressEdit = () => {
    NavigationService.navigate('FarmForm', { mode: 'edit' });
  };

  return (
    <HeaderBarButton
      iconName='edit-2'
      onPress={onPressEdit}
    />
  );
}

export default memo(EditButton);