import React, { memo } from 'react';
import {
  DrawerItem as UKDrawerItem,
} from '@ui-kitten/components';

import { Text } from 'atoms';

function DrawerItem({ title, ...otherProps }) {
  return (
    <UKDrawerItem
      title={<Text semibold size={14}>{title}</Text>}
      {...otherProps}
    />
  );
}

export default memo(DrawerItem);
