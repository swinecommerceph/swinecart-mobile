import React, { memo, useState } from 'react';
import { Image as RNImage } from 'react-native';

function Image(props) {

  const {
    imageSource, fallbackSource,
    ...otherProps
  } = props;

  const [ source, setSource ] = useState(imageSource);

  const onError = ({ nativeEvent: { error } } )=> {
    setSource(fallbackSource);
  };

  return (
    <RNImage 
      source={source}
      onError={onError}
      {...otherProps}
    />
  );
}

export default memo(Image);