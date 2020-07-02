import React, { Fragment, memo, useState } from 'react';
import { IndexPath } from '@ui-kitten/components';

import { types  } from 'constants/enums';

import { Input, ContainerView, Select } from 'molecules'


import { Block, Text, Checkbox } from 'atoms';


function ProductInformationPage({ formik }) {

  const [ selectedType, setSelectedType ] = useState(new IndexPath)
  const { values, setFieldValue, errors, touched } = formik;

  const onSelect = selectedIndex => {
    console.dir(selectedIndex);
  };

  return (
    <Fragment>
      <ContainerView padding={1} backgroundColor='white1'>
        <Block marginBottom={0.5}>
          <Input
            name='name'
            label='Name'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
          />
        </Block>
        <Block marginBottom={1}>
          {/* <Select
            name='type'
            label='Type'
            placeholder='Choose Type'
            data={types}
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
          /> */}
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
              keyboardType='numeric'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
            />
          </Block>
          <Block>
            <Text semibold size={15} marginHorizontal={0.5} marginTop={0.5}>
              to
            </Text>
          </Block>
          <Block flex={1}>
            <Input
              name='maxPrice'
              keyboardType='numeric'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
            />
          </Block>
        </Block>
        <Block marginBottom={0.5}>
          <Text bold size={16} color='primary' textAlign='left'>
            Is this product unique?
        </Text>
        </Block>
        <Block padding={1} backgroundColor='color-primary-100' marginBottom={0.5} borderRadius={5}>
          <Text semibold size={14} color='color-primary-500' textAlign='center'>
            If any customer buys a unique product, it will disappear upon being sold.
          </Text>
        </Block>
        <Block marginBottom={2}>
          <Checkbox
            name='isUnique'
            text='Yes, this product is unique'
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
          />
        </Block>
        <Block marginBottom={0.5}>
          <Text bold size={16} color='primary' textAlign='left'>
            Quantity of Product to be Added
        </Text>
        </Block>
        <Block padding={1} backgroundColor='color-primary-100' marginBottom={0.5} borderRadius={5}>
          <Text semibold size={14} color='color-primary-500' textAlign='center'>
            Unique products will always have a quantity of one (1). 
          </Text>
        </Block>
        <Block marginBottom={1}>
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