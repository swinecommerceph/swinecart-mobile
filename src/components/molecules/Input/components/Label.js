import React, { memo } from 'react';

import { Block, Text } from 'atoms';

function Label({ label, required = false, optional = false }) {
  return (
    <Block row marginBottom={0.5}>
			<Text semibold size={12}>{label}</Text>
			{required && <Text italic size={12}>{' - Required'}</Text>}
			{optional && <Text italic size={12}>{' - Optional'}</Text>}
    </Block>
  );
}

export default memo(Label, () => true);