import React, { memo } from 'react';

import { NavigationService } from 'services';

import { Block, Button, Text } from 'atoms';

import StarRating from '../../StarRating';

import { formatDateNeeded, formatDeliveryDate } from 'utils/formatters';

function RateBreeder(props) {

  // Props
  const { data, hideModal } = props;

  const onPressPrimaryAction = () => {
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };


  return (
    <Block backgroundColor='white1' borderRadius={5}>
      {/* <Block center left padding={1} >
        <Text bold size={20} textAlign='center' numberOfLines={2}>Breeder: McJolly Farms</Text>
      </Block> */}
      <Block padding>
        <Block row center>
          <Block flex={1} left>
            <Text bold size={14} color='gray3'>Delivery</Text>
          </Block>
          <Block row center right>
            <StarRating
              disabled={false}
              halfStarEnabled={true}
              maxStars={5}
              rating={1}
              starSize={30}
            />
            <Text bold size={14} color='gray3' marginLeft={0.5}>{1}</Text>
          </Block>
        </Block>
        <Block row center>
          <Block flex={1} left>
            <Text bold size={14} color='gray3'>Transaction</Text>
          </Block>
          <Block row center right>
            <StarRating
              disabled={false}
              halfStarEnabled={true}
              maxStars={5}
              rating={1}
              starSize={30}
            />
            <Text bold size={14} color='gray3' marginLeft={0.5}>{1}</Text>
          </Block>
        </Block>
        <Block row center>
          <Block flex={1} left>
            <Text bold size={14} color='gray3'>Product Quality</Text>
          </Block>
          <Block row center right>
            <StarRating
              disabled={false}
              halfStarEnabled={true}
              maxStars={5}
              rating={1}
              starSize={30}
            />
            <Text bold size={14} color='gray3' marginLeft={0.5}>{1}</Text>
          </Block>
        </Block>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='basic' onPress={onPressClose}>
            Close
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' onPress={onPressPrimaryAction}>
            Rate
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(RateBreeder);