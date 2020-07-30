import React, { Fragment, memo, useState, useEffect } from 'react';

import { types } from 'constants/enums';

import { Input, ContainerView, Select, MessageBox } from 'molecules';

import { Block, Text, Checkbox } from 'atoms';


function ProductInformationPage({ formik }) {

  const [ selectedType, setSelectedType ] = useState();
  const { values, setFieldValue, errors, touched, setFieldTouched } = formik;

  const onSelectType = selectedIndex => {
    setSelectedType(selectedIndex);
  };

  useEffect(() => {

    if (values['isUnique']) {
      setFieldValue('quantity', 1);
    }

  }, [ values['isUnique'] ]);


  return (
    <Fragment>
      <ContainerView padding={1} backgroundColor='white1'>
        <Block>
          <Input
            name='name'
            label='Name'
            placeholder='Enter Product Name here'
            required={true}
            errors={errors}
            touched={touched}
            values={values}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
          />
        </Block>
        <Block marginBottom={1}>
          <Select
            onSelect={onSelectType}
            selectedIndex={selectedType}
            placeholder='Choose Product Type'
            required={true}
            multiSelect={false}
            label='Type'
            options={types}
          />
        </Block>
        <Block marginBottom={0.5}>
          <Text semibold size={14}>
            Price Range -
            <Text italic size={12}>
              {' Optional'}
            </Text> 
          </Text>
        </Block>
        <Block row>
          <Block marginRight={1}>
            <Input
              name='minPrice'
              label='From'
              keyboardType='numeric'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              width={128}
            />
          </Block>
          <Block>
            <Input
              name='maxPrice'
              label='To'
              keyboardType='numeric'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              width={128}
            />
          </Block>
        </Block>
        {
          (selectedType && !(types[selectedType.row].key === 'semen')) &&
          <Block marginTop={1}>
            <Text bold size={16} color='primary' textAlign='left'>
              Is this product unique?
          </Text>
            <MessageBox status='primary' marginVertical={0.5}>
              If you reserve a unique product to a customer, it will no longer be displayed in the shop.
            </MessageBox>
            <Checkbox
              name='isUnique'
              errors={errors}
              touched={touched}
              values={values}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            >
              <Text semibold size={14}>
                Yes, it is unique.
              </Text>
            </Checkbox>
            <Block marginTop={1}>
              <Input
                disabled={values.isUnique}
                name='quantity'
                label='Quantity'
                keyboardType='numeric'
                errors={errors}
                touched={touched}
                values={values}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                width={96}
              />
            </Block>
          </Block>
        }
      </ContainerView>
    </Fragment>
  );
}

export default memo(ProductInformationPage);