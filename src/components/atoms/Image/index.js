import React, { memo, useState, useEffect } from 'react';
import { Image as RNImage } from 'react-native';

function Image(props) {

  const {
    imageSource,
    fallbackSource,
    ...otherProps
  } = props;

  useEffect(() => {
    setSource(imageSource);
  }, [ imageSource ]);

  const [ source, setSource ] = useState(imageSource);

  const onError = ()=> {
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