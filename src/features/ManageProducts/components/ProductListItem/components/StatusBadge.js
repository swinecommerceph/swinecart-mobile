import React, { memo } from 'react';

import { Badge } from 'molecules';

const statusMap = {
  'hidden': {
    text: 'Hidden',
    backgroundColor: 'gray5'
  },
  'displayed': {
    text: 'Displayed',
    backgroundColor: 'color-success-500'

  },
  'requested': {
    text: 'Requested',
    backgroundColor: 'primary'
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
        backgroundColor={statusMap[status].backgroundColor}
      />
    );
  // }
}

export default memo(StatusBadge);