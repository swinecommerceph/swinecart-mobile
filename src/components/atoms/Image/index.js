import React, { memo, useState } from 'react';
import { Image as RNImage } from 'react-native';

function Image(props) {

  const {
    imageSource, fallbackSource,
    ...otherProps
  } = props;

  const [ source, setSource ] = useState(imageSource);

  const onError = () => {
    setSource(fallbackSource);
  };

  console.dir('Image: Fallback Source', fallbackSource);

  return (
    <RNImage 
      source={source}
      onError={onError}
      {...otherProps}
    />
  );
}

export default memo(Image);