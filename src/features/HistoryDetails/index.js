import React, { memo, useState } from 'react';
import Timeline from 'react-native-timeline-flatlist';

import { Block, HeaderBar } from 'atoms';
import { Fragment } from 'react';

import { formatStatusTime } from 'utils/formatters';

function HistoryDetails(props) {

  // Props
  const history = props.navigation.getParam('logs').map(log => {

    const { status, createdAt } = log;

    return {
      title: status,
      description: `Updated on ${formatStatusTime(createdAt)}`
    }
  });

  return (
    <Fragment>
      <HeaderBar title='Order History' />
      <Block flex={1} padding>
        <Timeline
          data={history}
          timeContainerStyle={{ minWidth: 72 }}
          showTime={false}
          lineColor='#00695C'
          lineWidth={3}
          circleColor='#00695C'
          circleSize={24}
        />
      </Block>
    </Fragment>
  );
}

export default memo(HistoryDetails);