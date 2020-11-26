import React, { memo, useEffect, useMemo, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Select, SelectItem, withStyles } from '@ui-kitten/components';

import routes from 'constants/routes';

import { Block, Text } from 'atoms';

const options = routes.map(({ key, title }) => (
  <SelectItem key={key} title={<Text semibold>{title}</Text>} />)
);

function StatusPicker({ eva, jumpTo }) {

  const currentIndex = useStoreState(state => state.customerOrders.currentIndex);
  const setIndex = useStoreActions(actions => actions.customerOrders.setIndex);

  useEffect(() => {
    jumpTo(routes[currentIndex.row].key);
  }, [currentIndex])

  const onSelect = ({ row }) => {
    setIndex(row);
  };

  const value = useMemo(
    () => routes[currentIndex.row].title,
    [currentIndex]
  );

  return (
    <Block
      row middle center padding={0.5}
      backgroundColor='white1'
      borderBottomWidth={1}
      borderBottomColor='gray1'
    >
      <Text semibold color='gray5' marginRight={1}>
        Order Status
      </Text>
      <Select
        selectedIndex={currentIndex}
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