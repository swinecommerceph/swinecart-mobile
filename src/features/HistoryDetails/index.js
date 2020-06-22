import React, { memo, useMemo, Fragment } from 'react';
import Timeline from 'react-native-timeline-flatlist';

import { formatStatusTime } from 'utils/formatters';

import { HeaderBar, BackButton } from 'molecules';
import { Block } from 'atoms';

function HistoryDetails(props) {

  const logs = props.navigation.getParam('logs');

  const history = useMemo(() => {
    return logs.map(({ status, createdAt }) => ({
      title: status,
      description: `Updated on ${formatStatusTime(createdAt)}`
    }));
  }, [ logs ] );

  return (
    <Fragment>
      <HeaderBar title='Order History' accessoryLeft={BackButton} />
      <Block flex={1} padding={1}>
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