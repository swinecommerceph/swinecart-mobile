import React, { memo } from 'react';

import Badge from '../../Badge';

const statusMap = {
  'hidden': {
    text: 'Hidden',
    bc: 'gray5'
  },
  'displayed': {
    text: 'Displayed',
    bc: 'color-success-500'

  },
  'requested': {
    text: 'Requested',
    bc: 'primary'
  },
}

function StatusBadge({ status }) {
  // if (status === 'requested') {
  //   return (
  //     null
  //   );
  // }
  // else {
    return (
      <Badge
        marginRight={0.5}
        text={statusMap[status].text}
        backgroundColor={statusMap[status].bc}
      />
    );
  // }
}

export default memo(StatusBadge);