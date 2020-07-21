import React, { Fragment, memo, useState } from 'react';
import { IndexPath, Divider } from '@ui-kitten/components';

import { types  } from 'constants/enums';

import { Input, ContainerView, Select, MessageBox } from 'molecules';

import { Block, Text, Checkbox } from 'atoms';


function ProductInformationPage({ formik }) {

  const [ selectedType, setSelectedType ] = useState(new IndexPath(0));
  const { values, setFieldValue, errors, touched } = formik;

  const onSelectType = selectedIndex => {
    setSelectedType(selectedIndex);
  };

  return (
    <Fragment>
      <ContainerView padding={1} backgroundColor='white1'>
        <Block marginBottom={0.5}>
          <Input
            name='name'
            label='Name'
            required={true}
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
          />
        </Block>
        <Block marginBottom={1}>
          <Select
            onSelect={onSelectType}
            selectedIndex={selectedType}
            placeholder='Select Type'
            multiSelect={false}
            label='Type'
            options={types}
          />
        </Block>
        <Block marginBottom={0.5}>
          <Text semibold size={14} color='primary'>
            Price (range)
          </Text>
        </Block>
        <Block row marginBottom={1}>
          <Block flex={1}>
            <Input
              name='minPrice'
              label='Minimum Price'
              keyboardType='numeric'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
            />
          </Block>
          <Block>
            <Text semibold size={15} marginHorizontal={0.5} marginTop={2}>
              to
            </Text>
          </Block>
          <Block flex={1}>
            <Input
              name='maxPrice'
              label='Maximum Price'
              keyboardType='numeric'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
            />
          </Block>
        </Block>
        <Block marginBottom={0.5}>
          <Text bold size={16} color='black1' textAlign='left'>
            Is this Product unique?
          </Text>
          <MessageBox status='primary'>
            If any customer buys a unique product, it will disappear upon being sold.
          </MessageBox>
          <Checkbox
            name='isUnique'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
          >
            <Text semibold size={14}>
              Yes, it is unique.
            </Text>
          </Checkbox>
        </Block>
        <Divider />
        <Block marginBottom={1}>
          <Text bold size={16} color='black1' textAlign='left'>
            Quantity of Products to be Added
          </Text>
          <Input
            disabled={values.isUnique}
            name='quantity'
            label='Quantity'
            keyboardType='numeric'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
          />
        </Block>
      </ContainerView>
    </Fragment>
  );
}

export default memo(ProductInformationPage);