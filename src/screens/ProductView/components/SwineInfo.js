import React, { memo } from 'react';

import { TextGroup } from 'molecules';

import {
  Block, Text
} from 'atoms';

function getPropHouseTypeText(houseType) {
  return (
    houseType
    ?
      houseType === 'tunnelventilated'
        ? 'Tunnel Ventilated'
        : 'Open Sided'
    : null
  );
}

function checkNullField(label, data) {
  return (
    data
      ?
        (
          <TextGroup
            label={label}
            data={data}
          />
        )
      :
        (
          <TextGroup
            label={label}
            data='Not indicated'
            isItalicized
          />
        )
  );
}

function SwineInfo({ data, type }) {

  const {
    adg,
    fcr,
    bft,
    lsba,
    birthWeight,
    houseType,
    rightTeats,
    leftTeats,
  } = data;

  return (
    <Block marginTop={1} backgroundColor='white1'>
      <Block paddingHorizontal={1} >
        <Text bold size={18} marginBottom={0.5} color='primary'>
          Swine Information
        </Text>
      </Block>
      {checkNullField('Average Daily Gain (g)', adg)}
      {checkNullField('Feed Conversion Ratio', fcr)}
      {checkNullField('Backfat Thickness (mm)', bft)}
      {checkNullField('Litter Size (Born Alive)', lsba)}
      {checkNullField('Birth Weight', birthWeight)}
      {checkNullField('House Type', getPropHouseTypeText(houseType))}
      {
        type === 'gilt'
          ? checkNullField('Left Teats', leftTeats)
          : []
      }
      {
        type === 'gilt'
          ?checkNullField('Right Teats', rightTeats)
          : []
      }
    </Block>
  );
}


export default memo(SwineInfo, () => true);