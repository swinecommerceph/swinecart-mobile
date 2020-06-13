import React, { Fragment, memo, useState } from 'react';
import { Image as RNImage } from 'react-native';

function Image(props) {

  const {
    imageUrl, fallbackUrl,
    ...otherProps
  } = props;

  const [ uri, setURI ] = useState(imageUrl);

  const onError = () => {
    setURI(fallbackUrl);
  };

  return (
    <RNImage 
      source={{ uri: uri }}
      onError={onError}
      {...otherProps}
    />
  );
}

export default memo(Image);