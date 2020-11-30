import React, { Fragment, memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useStoreState } from 'easy-peasy';

import { Input, ContainerView, Select } from 'molecules'
import { Block, Button, Text, Divider } from 'atoms';

function SwineInformationPage({ formik }) {

  const farms = useStoreState(state => state.farms.items);
  const { houseOptions } = useStoreState(state => state.productForm);

  const { values, setFieldValue } = formik;

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
        showsVerticalScrollIndicator
      >
        <Block marginBottom={1}>
          <Text bold size={14} color='black1' textAlign='left'>
            Breed Type
          </Text>
        </Block>
        <Block row center middle marginBottom={1.5}>
          <Button status={values['isPureBreed'] ? 'primary' : 'basic'} marginRight={0.5} onPress={onPressPureBreed}>Pure Breed</Button>
          <Button status={values['isPureBreed'] ? 'basic' : 'primary'} onPress={onPressCrossBreed}>Cross Breed</Button>
        </Block>
        {
          values['isPureBreed'] && <Block>
            <Input
              label="Breed"
              name='breed'
              required={true}
              formControl={formik}
            />
          </Block>
        }
        {
          !values['isPureBreed'] && <Block>
            <Input
              label="Father's Breed"
              name='fatherBreed'
              required={true}
              formControl={formik}
            />
            <Input
              label="Mother's Breed"
              name='motherBreed'
              required={true}
              formControl={formik}
            />
          </Block>
        }

        <Divider marginBottom={1} />

        <Block marginBottom={1}>
          <Select
            name='farmFrom'
            label='Farm From'
            placeholder='Select Farm From'
            required={true}
            options={farms}
            valueProp='displayName'
            uniqueId='id'
            formControl={formik}
          />
        </Block>
        <Block marginBottom={1}>
          <Select
            name='houseType'
            label='House Type'
            placeholder='Select House Type'
            optional={true}
            options={houseOptions}
            valueProp='text'
            uniqueId='key'
            formControl={formik}
          />
        </Block>
        <Block>
          <Input
            name='birthWeight'
            label='Birth Weight'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formik}
          />
        </Block>
        <Block>
          <Input
            label='Average Daily Gain (grams)'
            name='adg'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formik}
          />
        </Block>
        <Block>
          <Input
            label='Feed Conversion Ratio'
            name='fcr'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formik}
          />
        </Block>
        <Block>
          <Input
            label='Backfat Thickness (mm)'
            name='bft'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formik}
          />
        </Block>
        <Block>
          <Input
            label='Litter Size Born Alive'
            name='lsba'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formik}
          />
        </Block>

        <Divider />

        <Block marginTop={1}>
          <Input
            label='Other Details'
            name='otherDetails'
            multiline
            numberOfLines={5}
            textAlignVertical='top'
            optional={true}
            formControl={formik}
          />
        </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(SwineInformationPage,  (props, nextProps) => {
  const valResult = isEqual(props.formik.values, nextProps.formik.values);
  const errResult = isEqual(props.formik.errors, nextProps.formik.errors);
  const touResult = isEqual(props.formik.touched, nextProps.formik.touched);
  return valResult && errResult && touResult;
});