import React from 'react';

import { capitalizeWords } from 'utils/formatters';

import { ModalService } from 'services';

import { Card } from 'molecules';

import {
  Block, Text, Button
} from 'atoms';

function FarmListItem({ data }) {

  const { name, province } = data;

  const onPressView = () => {

  };

  const onPressDelete = () => {

  };

  return (
    <Card>
      <Block>
      </Block>
      <Block flex={1} paddingHorizontal={1}>
        <Text bold color='black1' size={16}>
          {capitalizeWords(name)}
        </Text>
        <Text normal size={14}>
          {province}
        </Text>
        <Block row marginTop={1}>
          <Button
            size='tiny'
            status='primary'
            marginRight={1}
            onPress={onPressView}
          >
            View Details
          </Button>
          <Button size='tiny' status='basic' onPress={onPressDelete}>
            Delete Farm
          </Button>
        </Block>
      </Block>
    </Card>
  );
}

export default FarmListItem;