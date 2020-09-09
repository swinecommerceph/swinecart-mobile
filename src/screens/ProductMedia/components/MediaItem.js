import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';

import { Card, ProductAvatar } from 'molecules';
import { Block, Button } from 'atoms';

function MediaItem({ data }) {

  const {  
    deletePhoto
  } = useStoreActions(actions => actions.productMedia);

  const { id, link } = data;

  const onPressDeletePhoto = () => {
    deletePhoto(id);
  };
  
  return (
    <Card>
      <ProductAvatar shape='square' image={link} size={160} />
      <Block marginLeft={1}>
        <Block flex={1}>
          <Block alignSelf='flex-start'>
            <Button size='small' status='primary' onPress={null}>
              Set as Primary Photo
            </Button>
            <Button size='small' status='basic' onPress={onPressDeletePhoto} marginTop={0.5}>
              Delete Photo
            </Button>
          </Block>
        </Block>
      </Block>
    </Card>
  );
}

export default memo(MediaItem, () => true);