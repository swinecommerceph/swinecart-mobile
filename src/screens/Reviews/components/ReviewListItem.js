import React, { memo } from 'react';
import trim from 'lodash/trim';
import upperFirst from 'lodash/upperFirst';

import { formatStatusTime } from 'utils/formatters';

import { Card } from 'molecules';
import { Block, Text } from 'atoms';

import SubRating from './SubRating';

function ReviewListItem({ data }) {

  const {
    comment,
    customerName,
    customerProvince,
    createdAt,
    rating
  } = data;

  const trimmedComment = comment ? trim(comment) : '';

  return (
    <Card>
      <Block flex={1}>
        <Block row center>
          <Text bold size={14}>
            {upperFirst(customerName)}
          </Text>
          <Text normal size={14} color='gray5'>
            {` (${upperFirst(customerProvince)})`}
          </Text>
        </Block>
        <Block marginTop={0.5}>
          {
            trimmedComment !== ''
              ?
                (
                  <Text
                    bold
                    size={14}
                    color='gray5'
                    numberOfLines={5}
                    textAlign='left'
                  >
                    {`"${comment}"`}
                  </Text>
                )
              :
                (
                  <Text
                    italic
                    size={14}
                    color='gray5'
                    numberOfLines={5}
                    textAlign='left'
                  >
                    Customer did not write a review.
                  </Text>
                )
          }
        </Block>
        <Block marginTop={0.5}>
          <SubRating
            title='Delivery'
            rating={rating.delivery}
          />
          <SubRating
            title='Transaction'
            rating={rating.transaction}
          />
          <SubRating
            title='Product Quality'
            rating={rating.productQuality}
          />
        </Block>
        <Block marginTop={0.5}>
          <Text
            color='gray5'
            size={12}
            numberOfLines={2}
            textAlign='left'
          >
            {formatStatusTime(createdAt)}
          </Text>
        </Block>
      </Block>
    </Card>
  );

}

export default memo(ReviewListItem, () => true);