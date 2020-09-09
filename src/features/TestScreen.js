import React, { Fragment, memo, useEffect } from 'react';
import { HeaderBar, BackButton, TextArea, ContainerView, ProductInfo, ProductAvatar } from 'molecules';
import { Text, Block, Image } from 'atoms';

function DetailRow({ label, value }) {
  return (
    <Block row space='between'>
      <Text 
        bold size={12} 
        color='gray8'
      >
        {label}
      </Text>
      <Text 
        bold size={12}
        color='black2'
        textAlign='center' numberOfLines={2}
      >
        {value}
      </Text>
    </Block>
  );
}

function DetailBlock({ children }) {
  return (
    <Block
      backgroundColor='white1'
      padding={1}
      marginBottom={1}
    >
      {children}
    </Block>
  );
}

function Container() {
  return (
    <Fragment>
      <HeaderBar
        title='Order Details'
        accessoryLeft={BackButton}
      />
      <ContainerView flex={1} backgroundColor='gray9'>
        <DetailBlock>
          <DetailRow
            label='Breeder Name'
            value='PICC'
          />
          <DetailRow
            label='Province'
            value='Ilocos Norte'
          />
          <DetailRow
            label='Province'
            value='Ilocos Norte'
          />
        </DetailBlock>
        <DetailBlock>
          <DetailRow 
            label='Quantity'
            value='50000'
          />
          <DetailRow
            label='Estimated Date of Delivery'
            value='July 2, 2010 (Saturday)'
          />
          <DetailRow
            label='Date Needed'
            value='July 2, 2010 (Saturday)'
          />
          <TextArea 
            label='Special Request'
            disabled
            value='lorenlorenloren'
          />
        </DetailBlock>
      </ContainerView>
    </Fragment>
  );
}

export default memo(Container, () => true);