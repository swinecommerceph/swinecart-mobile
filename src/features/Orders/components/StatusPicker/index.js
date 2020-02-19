import React, { memo, useEffect, useCallback } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Select, withStyles } from '@ui-kitten/components';

import { Block, Text } from 'atoms';
import routes from 'constants/routes';

function StatusPicker({ themedStyle, jumpTo }) {

  const currentStatus = useStoreState(state => state.orders.currentStatus);
  const status = useStoreState(state => state.orders.status());
  const setCurrentStatus = useStoreActions(actions => actions.orders.setCurrentStatus);

  useEffect(() => {
    jumpTo(currentStatus.key);
  }, [currentStatus])

  const onSelect = useCallback(option => {
    setCurrentStatus(option);
  }, []);

  return (
    <Block 
      row middle center padding
      backgroundColor='white1'
      borderBottomWidth={1} borderBottomColor='gray1'
    >
      <Text semibold color='gray5' marginRight={1}>
        Order Status
      </Text>
      <Select
        data={routes}
        selectedOption={status}
        onSelect={onSelect}
        style={themedStyle.selectContainer}
        textStyle={themedStyle.selectTextStyle}
      />
    </Block>
  );
}

export default withStyles(memo(StatusPicker), () => ({
  selectContainer: {
    width: 200,
  },
  selectTextStyle: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'normal'
  }
}));