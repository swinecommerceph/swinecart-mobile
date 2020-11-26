import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreState } from 'easy-peasy';

import { ModalService } from 'services';

import { UserAvatar, Card } from 'molecules';
import { Block, Text, Button } from 'atoms';

function RequestItem({ data }) {

  const currentProduct = useStoreState(
    state => state.requests.currentProduct
  );

  const { customerProvince, customerName } = data;

  const onPressView = () => {
    ModalService.showModal(
      'OrderDetails',
      { product: currentProduct, reservation: data }
    );
  };

  const onPressApprove = () => {
    ModalService.showModal('ApproveRequest', { ...data });
  };

  const onPressDisapprove = () => {
    ModalService.showModal('DisapproveRequest', { ...data });
  };

  return (
    <TouchableOpacity activeOpacity={0.90} onPress={onPressView}>
      <Card>
        <UserAvatar userName={customerName} size={64} textSize={20} />
        <Block flex={1} marginLeft={1}>
          <Text
            semibold
            color='black1'
            size={16}
            numberOfLines={2}
            textAlign='left'
          >
            {customerName}
          </Text>
          <Text
            normal
            color='gray3'
            size={14}
            numberOfLines={2}
            textAlign='left'
          >
            {customerProvince}
          </Text>
          <Block flex={1} row alignSelf='flex-start' marginTop={0.5}>
            <Block>
              <Button
                size='tiny'
                onPress={onPressApprove}
                marginRight={0.5}
              >
                Approve
              </Button>
            </Block>
            <Block>
              <Button
                size='tiny'
                status='basic'
                onPress={onPressDisapprove}
              >
                Disapprove
            </Button>
            </Block>
          </Block>
        </Block>
      </Card>
    </TouchableOpacity>
  );
}

export default memo(RequestItem, () => true);