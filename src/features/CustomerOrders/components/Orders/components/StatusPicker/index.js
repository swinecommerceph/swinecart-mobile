import React, { memo, useEffect, useCallback, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { IndexPath, Select, SelectItem, withStyles } from '@ui-kitten/components';

import routes from 'constants/routes';

import { Block, Text } from 'atoms';

const options = routes.map(({ key, title }) => {
  return (
    <SelectItem
      key={key}
      title={<Text semibold>{title}</Text>}
    />
  )
});

console.dir(options, routes);

function StatusPicker({ eva, jumpTo }) {

  // const currentStatus = useStoreState(state => state.customerOrders.currentStatus);
  // const status = useStoreState(state => state.customerOrders.status());
  // const setCurrentStatus = useStoreActions(actions => actions.customerOrders.setCurrentStatus);

  const [selectedIndex, setIndex] = useState(new IndexPath(0));

  useEffect(() => {
  }, [])

  const onSelect = useCallback(index => {
    setIndex(index);
    console.dir(index);
  }, []);

  const value = routes[selectedIndex].title;

  return (
    <Block 
      row middle center padding={1}
      backgroundColor='white1'
      borderBottomWidth={1} borderBottomColor='gray1'
    >
      <Text semibold color='gray5' marginRight={1}>
        Order Status
      </Text>
      <Select
        selectedIndex={selectedIndex}
        onSelect={onSelect}
        value={<Text semibold>{value}</Text>}
        style={eva.style.selectContainer}
      >
        {options}
      </Select>
    </Block>
  );
}

export default withStyles(memo(StatusPicker), () => ({
  selectContainer: {
    width: 200,
  },
}));