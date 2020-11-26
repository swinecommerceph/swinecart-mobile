import React, { Fragment, memo, useEffect, useState } from 'react';
import { Divider } from '@ui-kitten/components';

import { Input, ContainerView, Select } from 'molecules'
import { Block, Button, Text, Checkbox } from 'atoms';

import { houseTypes } from 'constants/enums';

function SwineInformationPage({ formik }) {

  const { values, setFieldValue, errors, touched, setFieldTouched } = formik;

  // const farms = useStoreState(state => state.farms.items);

  const onPressPureBreed = () => {
    setFieldValue('isPureBreed', true);
  };

  const onPressCrossBreed = () => {
    setFieldValue('isPureBreed', false);
  };

  return (
    <Fragment>
      <ContainerView
        padding={1}
        backgroundColor='white1'
      >
        <Block marginBottom={1}>
          <Text bold size={14} color='primary' textAlign='left'>
            Breed Type
          </Text>
        </Block>
        <Block row center middle marginBottom={1.5}>
          <Button status={values['isPureBreed'] ? 'primary' : 'basic'} marginRight={0.5} onPress={onPressPureBreed}>Pure Breed</Button>
          <Button status={values['isPureBreed'] ? 'basic' : 'primary'} onPress={onPressCrossBreed}>Cross Breed</Button>
        </Block>
        {
          values['isPureBreed'] && <Block marginBottom={1}>
            <Input
              label="Breed"
              name='breed'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              required={true}
            />
          </Block>
        }
        {
          !values['isPureBreed'] && <Block marginBottom={1}>
            <Input
              label="Father's Breed"
              name='fatherBreed'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              required={true}
            />
            <Input
              label="Mother's Breed"
              name='motherBreed'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              required={true}
            />
          </Block>
        }

        <Divider />

        <Block marginBottom={1} marginTop={1}>
          <Input
            name='birthWeight'
            label='Birth Weight'
            keyboardType='numeric'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            optional={true}
            width={128}
          />
        </Block>
        {/* <Block marginBottom={1}>
          {
            farms && <Select
              name='farmFrom'
              label='Farm From'
              placeholder='Choose Farm From'
              data={farms}
              setFieldValue={setFieldValue}
              values={values}
            />
          }
        </Block> */}
        {/* <Block marginBottom={1}>
          <Select
            name='houseType'
            label='House Type'
            placeholder='Choose House Type'
            data={houseTypes}
            setFieldValue={setFieldValue}
            values={values}
          />
        </Block> */}
        <Block marginBottom={1}>
          <Input
            label='Average Daily Gain (grams)'
            name='adg'
            keyboardType='numeric'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            optional={true}
            width={128}
          />
        </Block>
        <Block marginBottom={1}>
          <Input
            label='Feed Conversion Ratio'
            name='fcr'
            keyboardType='numeric'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            optional={true}
            width={128}
          />
        </Block>
        <Block marginBottom={1}>
          <Input
            label='Backfat Thickness (mm)'
            name='bft'
            keyboardType='numeric'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            optional={true}
            width={128}
          />
        </Block>
        <Block marginBottom={1}>
          <Input
            label='Litter Size Born Alive'
            name='lsba'
            keyboardType='numeric'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            optional={true}
            width={128}
          />
        </Block>

        <Divider />

        <Block marginTop={1}>
          <Input
            label='Other Details'
            name='otherDetails'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            multiline
            numberOfLines={5}
            textAlignVertical='top'
            optional={true}
          />
        </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(SwineInformationPage);