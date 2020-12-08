import React, { memo, useMemo } from 'react';
import { APP_URL } from 'react-native-dotenv';
import { Avatar, withStyles } from '@ui-kitten/components';

import { Block } from 'atoms';

function BreederLogo(props) {

  const {
    logoURL,
    eva: { style }
  } = props;

  const source = useMemo(() => {
    return { uri: `${APP_URL}${logoURL}` }
  }, [ logoURL ]);

  return (
    <Block center middle paddingVertical={1} flex={false} backgroundColor='white1'>
      {/* <Block center middle flex={false} borderWidth={1} borderColor='gray2'
         height={160} width={160} borderRadius={80} backgroundColor='gray2'> */}
        <Avatar
          shape='rounded'
          source={source}
          style={style.avatarStyle}
        />
      {/* </Block> */}
    </Block>
  );
}

export default withStyles(memo(BreederLogo), () => ({
  avatarStyle: {
    width: 144,
    height: 144
  }
}));
