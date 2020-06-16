import React, { memo, useEffect, useMemo, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { IndexPath, Select, SelectItem, withStyles } from '@ui-kitten/components';

import routes from 'constants/routes';

import { Block, Text } from 'atoms';

const options = routes.map(({ key, title }) => (
  <SelectItem key={key} title={<Text semibold>{title}</Text>} />)
);


function StatusPicker({ eva, jumpTo }) {

  // const currentStatus = useStoreState(state => state.orders.currentStatus);
  // const status = useStoreState(state => state.orders.status());
  // const setCurrentStatus = useStoreActions(actions => actions.orders.setCurrentStatus);

  const [selectedIndex, setIndex] = useState(new IndexPath(0));

  useEffect(() => {
    jumpTo(routes[selectedIndex.row].key);
  }, [selectedIndex])

  const onSelect = index => {
    setIndex(index);
  };

  const value = useMemo(
    () => routes[selectedIndex.row].title,
    [selectedIndex]
  );

  return (
    <Block
      row middle center padding={1}
      backgroundColor='white1'
      borderBottomWidth={1}
      borderBottomColor='gray1'
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
  }
}));