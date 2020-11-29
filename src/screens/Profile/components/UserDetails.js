import React, { memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { ContainerView } from 'molecules';
import { Block } from 'atoms';

import BreederLogo from './BreederLogo';
import ProfileText from './ProfileText';

function UserDetails() {

  const profile = useStoreState(state => state.profile.data);
  const accountType = useStoreState(state => state.user.accountType);

  return (
    <ContainerView backgroundColor='white1'>
      {/* <Block marginBottom={1}>
        <BreederLogo logoURL={profile.logoUrl} />
      </Block> */}
      <Block marginVertical={1} backgroundColor='white1'>
        <ProfileText label='Address Line 1' data={profile.addressLine1} />
        <ProfileText label='Address Line 2' data={profile.addressLine2} />
        <ProfileText label='Province' data={profile.province} />
        <ProfileText label='Postal / Zip Code' data={profile.zipCode} />
        <ProfileText label='Landline' data={profile.landline} />
        <ProfileText label='Mobile' data={profile.mobile} />
      </Block>
      {/* <Block marginVertical={1} backgroundColor='white1'>
        <ProfileText label='Contact Person Name' data={profile.contactPersonName} />
        <ProfileText label='Contact Person Mobile' data={profile.contactPersonMobile} />
      </Block>
      <Block marginVertical={1} backgroundColor='white1'>
        <ProfileText label='Website' data={profile.website} />
        <ProfileText label='Produce' data={profile.produce} />
      </Block> */}
    </ContainerView>
  );

}

export default memo(UserDetails);
