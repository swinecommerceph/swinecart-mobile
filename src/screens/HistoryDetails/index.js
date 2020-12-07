import React, { memo, useMemo, Fragment } from 'react';
import Timeline from 'react-native-timeline-flatlist';

import { formatStatusTime } from 'utils/formatters';

import { HeaderBar, BackButton } from 'molecules';
import { Block } from 'atoms';

function HistoryDetails({ route }) {

  const logs = route.params.logs;

  const history = useMemo(() => {
    return logs.map(({ status, createdAt }) => ({
      title: status === 'Cancel_transaction' ? 'Cancel Transaction' : status,
      description: `Updated on ${formatStatusTime(createdAt)}`
    }));
  }, [ logs ] );

  return (
    <Fragment>
      <HeaderBar title='Order Details' accessoryLeft={BackButton} />
      <Block flex={1} backgroundColor='white1'>
        <Timeline
          data={history}
          timeContainerStyle={{ minWidth: 72, backgroundColor: '#ffffff' }}
          showTime={false}
          lineColor='#00695C'
          lineWidth={3}
          circleColor='#00695C'
          circleSize={24}
          listViewContainerStyle={{ padding: 16, backgroundColor: '#ffffff', }}
          titleStyle={{ fontFamily: 'OpenSans-SemiBold', fontWeight: 'normal', fontSize: 14 }}
          descriptionStyle={{ fontFamily: 'OpenSans-Regular', fontWeight: 'normal', fontSize: 12, color: '#6F6F6F' }}
        />
      </Block>
    </Fragment>
  );
}

export default memo(HistoryDetails);