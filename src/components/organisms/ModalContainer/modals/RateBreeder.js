import React, { memo, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { TextArea } from 'molecules';

import { Block, Button, Text, StarRating } from 'atoms';

function RateBreeder(props) {

  const { reviewBreeder } = useStoreActions(actions => actions.customerOrderHistory);

  const [deliveryRating, setDeliveryRating] = useState(1);
  const [transactionRating, setTransactionRating] = useState(1);
  const [productQualityRating, setProductQualityRating] = useState(1);
  const [currentComment, setCurrentComment] = useState('');

  // Props
  const { data, hideModal } = props;
  const { id, product } = data;

  const { breederId } = product;

  const onPressPrimaryAction = () => {
    reviewBreeder({ 
      breederId,
      itemId: id,
      comment: currentComment,
      delivery: deliveryRating,
      transaction: transactionRating,
      productQuality: productQualityRating
    });
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block center left padding={1} >
        <Text bold size={14} textAlign='center' numberOfLines={2}>Breeder: McJolly Farms</Text>
      </Block>
      <Block padding>
        <Block row center>
          <Block flex={1} left>
            <Text bold size={14} color='gray3'>Delivery</Text>
          </Block>
          <Block row center right>
            <StarRating
              disabled={false}
              halfStarEnabled={false}
              maxStars={5}
              rating={deliveryRating}
              starSize={30}
              selectedStar={setDeliveryRating}
            />
            <Text bold size={14} color='gray3' marginLeft={0.5}>{deliveryRating}</Text>
          </Block>
        </Block>
        <Block row center>
          <Block flex={1} left>
            <Text bold size={14} color='gray3'>Transaction</Text>
          </Block>
          <Block row center right>
            <StarRating
              disabled={false}
              halfStarEnabled={false}
              maxStars={5}
              rating={transactionRating}
              starSize={30}
              selectedStar={setTransactionRating}
            />
            <Text bold size={14} color='gray3' marginLeft={0.5}>{transactionRating}</Text>
          </Block>
        </Block>
        <Block row center>
          <Block flex={1} left>
            <Text bold size={14} color='gray3'>Product Quality</Text>
          </Block>
          <Block row center right>
            <StarRating
              disabled={false}
              halfStarEnabled={false}
              maxStars={5}
              rating={productQualityRating}
              starSize={30}
              selectedStar={setProductQualityRating}
            />
            <Text bold size={14} color='gray3' marginLeft={0.5}>{productQualityRating}</Text>
          </Block>
        </Block>
        <Block>
          <TextArea
            label='Comment'
            value={currentComment}
            onChangeText={setCurrentComment}
          />
        </Block>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny'  status='basic' onPress={onPressClose}>
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