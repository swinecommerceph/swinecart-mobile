import React, { memo, useState, Fragment } from 'react';
import { useWindowDimensions  } from 'react-native';
import { ViewPager } from '@ui-kitten/components';
import Dots from 'react-native-dots-pagination';

import { colors } from 'constants/theme';

import SliderImage from './SliderImage';

function Images({ data: images, type }) {

  const { width } = useWindowDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const imageHeight = ~~(width);

  const onSelect = index => setSelectedIndex(index);

  return (
    <Fragment>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={onSelect}
      >
        {images.map(image => (
          <SliderImage
            imageUrl={image.link}
            height={imageHeight}
            type={type}
            key={image.id}
          />
        ))}
      </ViewPager>
      <Dots
        length={images.length}
        active={selectedIndex}
        activeColor={colors.primary}
        passiveColor={colors.gray7}
        activeDotWidth={12}
        activeDotHeight={12}
      />
    </Fragment>
  );
}

export default memo(Images);