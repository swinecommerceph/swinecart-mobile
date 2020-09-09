import React, { memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { ContainerView, LoadingView } from 'molecules';
import { Block } from 'atoms';

import BreederLogo from './BreederLogo';
import ProfileText from './ProfileText';

function OfficeInfo() {
  
  const isLoading = useStoreState(
    state => state.breederProfile.isLoading
  );

  const hasError = useStoreState(
    state => state.breederProfile.hasError
  );

  const profile = useStoreState(
    state => state.breederProfile.data
  );

  // console.dir('Loading', isLoading);
  // console.dir('Error', hasError);

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (hasError) {
    return (
      <LoadingView />
    );
  }

  else if (!isLoading && profile) {
    return (
      <ContainerView>
        <Block marginBottom={1}>
          <BreederLogo logoURL={profile.logoUrl} />
        </Block>
        <Block marginVertical={1} backgroundColor='white1'>
          <ProfileText label='Address Line 1' data={profile.addressLine1} />
          <ProfileText label='Address Line 2' data={profile.addressLine2} />
          <ProfileText label='Province' data={profile.province} />
          <ProfileText label='Postal / Zip Code' data={profile.zipCode} />
          <ProfileText label='Landline' data={profile.officeLandline} />
          <ProfileText label='Mobile' data={profile.officeMobile} />
        </Block>
        <Block marginVertical={1} backgroundColor='white1'>
          <ProfileText label='Contact Person Name' data={profile.contactPersonName} />
          <ProfileText label='Contact Person Mobile' data={profile.contactPersonMobile} />
        </Block>
        <Block marginVertical={1} backgroundColor='white1'>
          <ProfileText label='Website' data={profile.website} />
          <ProfileText label='Produce' data={profile.produce} />
        </Block>
      </ContainerView>
    );
  };

}

export default memo(OfficeInfo);
