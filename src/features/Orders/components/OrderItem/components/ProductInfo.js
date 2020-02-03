import React, { Fragment, memo } from 'react';
import { capitalizeWords } from 'utils/formatters';

import { Text } from 'shared';

function ProductInfo({ name, type, breed }) {
  return (
    <Fragment>
      <Text bold color='black1' size={18}>
        {capitalizeWords(name)}
      </Text>
      <Text normal size={14}>
        {capitalizeWords(type)} - {breed}
      </Text>
    </Fragment>
  );
}

export default memo(ProductInfo, () => true);