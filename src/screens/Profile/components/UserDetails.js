import React, { memo, Fragment } from 'react';
import { useStoreState } from 'easy-peasy';

import { ContainerView, TextGroup } from 'molecules';
import { Block } from 'atoms';

import BreederLogo from './BreederLogo';

function UserDetails() {

  const profile = useStoreState(state => state.profile.data);
  const accountType = useStoreState(state => state.user.accountType);

  return (
    <ContainerView backgroundColor='white1'>
      <Block marginTop={1}>
        <BreederLogo logoURL={profile.logoUrl} />
      </Block>
      <Block marginTop={1} backgroundColor='white1'>
        <TextGroup label='Address Line 1' data={profile.addressLine1} />
        <TextGroup label='Address Line 2' data={profile.addressLine2} />
        <TextGroup label='Province' data={profile.province} />
        <TextGroup label='Postal / Zip Code' data={profile.zipCode} />
        <TextGroup label='Landline' data={profile.landline} />
        <TextGroup label='Mobile' data={profile.mobile} />
      </Block>
      {
        accountType === 'Breeder' &&
        <Fragment>
          <Block marginTop={1} backgroundColor='white1'>
            <TextGroup
              label='Contact Person Name'
              data={profile.contactPerson.name}
            />
            <TextGroup
              label='Contact Person Mobile'
              data={profile.contactPerson.mobile}
            />
          </Block>
          <Block marginTop={1} backgroundColor='white1'>
            <TextGroup label='Website' data={profile.website} />
            <TextGroup label='Produce' data={profile.produce} />
          </Block>
        </Fragment>
      }
    </ContainerView>
  );

}

export default memo(UserDetails);
