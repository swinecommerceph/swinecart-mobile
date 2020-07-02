import React, { memo } from 'react';

import { pluralize } from 'utils/formatters';

import { Block, Text } from 'atoms';

function MediaInfo({ imageCount, videoCount }) {
  return (
    <Block center marginTop={0.5}>
      <Text semibold size={14}>{pluralize(imageCount, 'Image')}</Text>
      <Text semibold size={14}>{pluralize(videoCount, 'Video')}</Text>
    </Block>
  );
}

export default memo(MediaInfo);