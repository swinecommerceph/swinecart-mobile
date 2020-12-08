import React, { Fragment, memo } from 'react';
import isEqual from 'react-fast-compare';
import { useStoreState } from 'easy-peasy';

import { Input, ContainerView, Select, DateInput } from 'molecules';
import { Block, Button, Text, Divider } from 'atoms';

const epoch = new Date(1970, 1, 1);
const today = new Date();

function SwineInformationPage({ formControl }) {

  const farms = useStoreState(state => state.farms.items);
  const { houseOptions } = useStoreState(state => state.productForm);

  const { values, setFieldValue } = formControl;

  const onPressPureBreed = () => {
    setFieldValue({ name: 'isPureBreed', value: true });
  };

  const onPressCrossBreed = () => {
    setFieldValue({ name: 'isPureBreed', value: false });
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
          <Button
            status={values['isPureBreed'] ? 'primary' : 'basic'}
            marginRight={0.5}
            onPress={onPressPureBreed}
          >
            Pure Breed
          </Button>
          <Button
            status={values['isPureBreed'] ? 'basic' : 'primary'}
            onPress={onPressCrossBreed}
          >
            Cross Breed
          </Button>
        </Block>
        {
          values['isPureBreed'] && <Block>
            <Input
              name='breed'
              label="Breed"
              required={true}
              formControl={formControl}
            />
          </Block>
        }
        {
          !values['isPureBreed'] && <Block>
            <Input
              name='fatherBreed'
              label="Father's Breed"
              required={true}
              formControl={formControl}
            />
            <Input
              name='motherBreed'
              label="Mother's Breed"
              required={true}
              formControl={formControl}
            />
          </Block>
        }

        <Divider marginBottom={1} />
        <Block>
          <DateInput
            name='birthDate'
            label='Birth Date'
            placeholder='Choose Birth Date'
            min={epoch}
            max={today}
            optional={true}
            formControl={formControl}
          />
        </Block>
        <Block>
          <Select
            name='farmFrom'
            label='Farm From'
            placeholder='Select Farm From'
            required={true}
            options={farms}
            valueProp='displayName'
            uniqueId='id'
            formControl={formControl}
          />
        </Block>
        <Block>
          <Select
            name='houseType'
            label='House Type'
            placeholder='Select House Type'
            optional={true}
            options={houseOptions}
            valueProp='text'
            uniqueId='key'
            formControl={formControl}
          />
        </Block>
        <Block>
          <Input
            name='birthWeight'
            label='Birth Weight'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formControl}
          />
        </Block>
        <Block>
          <Input
            label='Average Daily Gain (grams)'
            name='adg'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formControl}
          />
        </Block>
        <Block>
          <Input
            label='Feed Conversion Ratio'
            name='fcr'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formControl}
          />
        </Block>
        <Block>
          <Input
            label='Backfat Thickness (mm)'
            name='bft'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formControl}
          />
        </Block>
        <Block>
          <Input
            label='Litter Size Born Alive'
            name='lsba'
            keyboardType='numeric'
            optional={true}
            width={128}
            formControl={formControl}
          />
        </Block>
        {
          (values['type'] && values['type'].key === 'gilt') &&
          <Block row>
            <Block marginRight={1}>
              <Input
                label='Left Teats'
                name='leftTeats'
                keyboardType='numeric'
                optional={true}
                width={128}
                formControl={formControl}
              />
            </Block>
            <Block>
              <Input
                label='Right Teats'
                name='rightTeats'
                keyboardType='numeric'
                optional={true}
                width={128}
                formControl={formControl}
              />
            </Block>
          </Block>
        }

        <Divider />

        <Block marginTop={1}>
          <Input
            label='Other Details'
            name='otherDetails'
            multiline
            numberOfLines={5}
            textAlignVertical='top'
            optional={true}
            formControl={formControl}
          />
        </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(SwineInformationPage,  (props, nextProps) => {
  const valResult = isEqual(props.formControl.values, nextProps.formControl.values);
  const errResult = isEqual(props.formControl.errors, nextProps.formControl.errors);
  const touResult = isEqual(props.formControl.touched, nextProps.formControl.touched);
  return valResult && errResult && touResult;
});