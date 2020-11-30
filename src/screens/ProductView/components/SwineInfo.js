import React, { memo } from 'react';
import {
  Block, Text
} from 'atoms';

import SwineInfoRow from './SwineInfoRow';

function SwineInfo({ data }) {
  const {
    adg, fcr, bft, lsba, birth_weight, house_type
  } = data;

  return (
    <Block backgroundColor='white1' paddingHorizontal={1}>
      <Text bold size={20} marginBottom={0.5} color='primary'>Swine Information</Text>
      <SwineInfoRow label={'Average Daily Gain (g)'} data={adg} />
      <SwineInfoRow label={'Feed Conversion Ratio'} data={fcr} />
      <SwineInfoRow label={'Backfat Thickness (mm)'} data={bft} />
      <SwineInfoRow label={'Litter Size (Born Alive)'} data={lsba} />
      <SwineInfoRow label={'Birth Weight'} data={birth_weight} />
      <SwineInfoRow label={'House Type'} data={
        house_type
          ?
            house_type === 'tunnelventilated'
              ? 'Tunnel Ventilated'
              : 'Open Sided'
          : null
      } />
    </Block>
  );
}


export default memo(SwineInfo, () => true);