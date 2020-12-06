import React, { Fragment } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { TextGroup, ContainerView } from 'molecules';
import { Block } from 'atoms';

function Details(props) {

  const accountType = useStoreState(state => state.user.accountType);
  const farm = useStoreState(state => state.farmDetails.data);

  const { accreditation } = farm;

  return (
    <ContainerView
      backgroundColor='white1'
    >
      {
        accountType === 'Breeder'
          ? <Block marginBottom={2} backgroundColor='white1'>
              <TextGroup label='Accreditation No.' data={accreditation.number} />
              <TextGroup label='Accreditation Status' data={accreditation.status} />
              <TextGroup label='Accreditation Date - Expiry' data={
                `${accreditation.date}\n${accreditation.expiry}`
              } />
            </Block>
          : []
      }
      <Block backgroundColor='white1'>
        <TextGroup label='Name' data={farm.name} />
        <TextGroup label='Address Line 1' data={farm.addressLine1} />
        <TextGroup label='Address Line 2' data={farm.addressLine2} />
        <TextGroup label='Farm Type' data={farm.farmType} />
        <TextGroup label='Province' data={farm.province.text} />
        <TextGroup label='Postal / Zip Code' data={farm.zipCode} />
        <TextGroup label='Landline' data={farm.landline} />
        <TextGroup label='Mobile' data={farm.mobile} />
      </Block>
    </ContainerView>
  );

};

export default Details;