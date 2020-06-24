import React, { memo, useMemo, Fragment } from 'react';
import Timeline from 'react-native-timeline-flatlist';

import { formatStatusTime } from 'utils/formatters';

import { HeaderBar, BackButton } from 'molecules';

function HistoryDetails(props) {

  const logs = props.navigation.getParam('logs');

  const history = useMemo(() => {
    return logs.map(({ status, createdAt }) => ({
      title: status === 'Cancel_transaction' ? 'Cancel Transaction' : status,
      description: `Updated on ${formatStatusTime(createdAt)}`
    }));
  }, [ logs ] );

  return (
    <Fragment>
      <HeaderBar title='Order History' accessoryLeft={BackButton} />
      <Timeline
        data={history}
        timeContainerStyle={{ minWidth: 72 }}
        showTime={false}
        lineColor='#00695C'
        lineWidth={3}
        circleColor='#00695C'
        circleSize={24}
        innerCircle='dot'
        listViewContainerStyle={{ padding: 16 }}
        titleStyle={{ fontFamily: 'OpenSans-SemiBold', fontWeight: 'normal', fontSize: 14 }}
        descriptionStyle={{ fontFamily: 'OpenSans-Regular', fontWeight: 'normal', fontSize: 12, color: '#6F6F6F' }}
      />
    </Fragment>
  );
}

export default memo(HistoryDetails);