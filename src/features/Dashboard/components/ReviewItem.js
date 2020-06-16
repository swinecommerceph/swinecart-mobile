import React, { Fragment, memo, useState } from 'react';
import trim from 'lodash/trim';
import upperFirst from 'lodash/upperFirst';

import { formatStatusTime } from 'utils/formatters';

import { Block, Text } from 'atoms';

import SubRating from './SubRating';

function ReviewItem({ data }) {

  const [showMore, setShowMore] = useState(false);

  const {
    comment, customerName, customerProvince, createdAt, rating
  } = data;

  const onPress = () => setShowMore(!showMore);

  const iconName = showMore ? 'arrow-up' : 'arrow-down';

  const trimmedComment = comment ? trim(comment) : '';

  return (
    <Block flexGrow={-1} backgroundColor='primary' borderRadius={5} marginHorizontal={1} marginTop={1} shadow='shadow2' padding={1}>
      <Block row center>
        <Block flex={1} row center left>
          <Text bold size={14} color='white1' numberOfLines={1}>{customerName}</Text>
          <Text bold size={12} color='gray4' numberOfLines={1} marginLeft={0.5}>{`(${upperFirst(customerProvince)})`}</Text>
        </Block>
        <Block center right>
          {/* <IconButton iconName={iconName} iconColor='white1' status='primary' onPress={onPress} size='small' /> */}
        </Block>
      </Block>
      {
        trimmedComment !== '' &&
        <Block>
          <Text bold size={14} color='gray4' numberOfLines={5} textAlign='left'>
            {`"${comment}"`}
          </Text>
        </Block>
      }
      {
        trimmedComment === '' &&
        <Block>
          <Text italic size={14} color='gray4' numberOfLines={5} textAlign='left'>
            Customer did not write a review.
          </Text>
        </Block>
      }
      {
        showMore && 
        <Block marginTop={0.5}>
          <SubRating title='Delivery' titleSize={12} textColor='gray4' ratingTextSize={10} rating={rating.delivery} />
          <SubRating title='Transaction' titleSize={12} textColor='gray4' ratingTextSize={10} rating={rating.transaction} />
          <SubRating title='Product Quality' titleSize={12} textColor='gray4' ratingTextSize={10} rating={rating.productQuality} />
        </Block>
      }
      <Block marginTop={0.5}>
        <Text bold size={12} color='white1' numberOfLines={2} textAlign='left'>
          {formatStatusTime(createdAt)}
        </Text>
      </Block>
    </Block>
  );

}

export default memo(ReviewItem);