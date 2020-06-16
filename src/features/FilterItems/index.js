import React, { Fragment, memo } from 'react';

import { ContainerView, HeaderBar, BackButton } from 'molecules';
import { Block, Button, Text } from 'atoms';

function Container() {

  return (
    <Fragment>
      <HeaderBar title='' accessoryLeft={BackButton} />
      <ContainerView
        showsVerticalScrollIndicator={true}
        backgroundColor='white1'
      >
        <Block flex={1} padding={1}>
          <Block row center marginTop={1}>
            <Block flex={1}>
              <Button size='small' onPress={null}>
                Submit
            </Button>
            </Block>
          </Block>
        </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(Container, () => true);