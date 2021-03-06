import React, { Fragment, memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useStoreState } from 'easy-peasy';

import { Input, ContainerView, Select, MessageBox } from 'molecules';

import { Block, Text, Checkbox } from 'atoms';

function ProductInformationPage({ formControl }) {

  const { values, setFieldValue, touched } = formControl;

  useEffect(() => {

    if (values['isUnique']) {
      setFieldValue('quantity', 1);
    }

    if (values['type'] && values['type'].key === 'semen') {
      setFieldValue('quantity', null);
    }

  }, [ values['isUnique'], touched['isUnique'], values['type'] ]);

  const typeOptions = useStoreState(state => state.productForm.typeOptions);

  return (
    <Fragment>
      <ContainerView
        padding={1}
        backgroundColor='white1'
        showsVerticalScrollIndicator
      >
        <Block>
          <Input
            name='name'
            label='Name'
            placeholder='Enter Product Name here'
            required={true}
            formControl={formControl}
          />
        </Block>
        <Block marginTop={0.5}>
          <Select
            name='type'
            label='Type'
            placeholder='Select Type'
            required={true}
            options={typeOptions}
            valueProp='title'
            uniqueId='key'
            formControl={formControl}
          />
        </Block>
        <Block marginVertical={0.5}>
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
              placeholder='100'
              keyboardType='numeric'
              formControl={formControl}
              width={128}
            />
          </Block>
          <Block>
            <Input
              name='maxPrice'
              label='To'
              placeholder='1000'
              keyboardType='numeric'
              formControl={formControl}
              width={128}
            />
          </Block>
        </Block>
        {
          (values['type'] && !(values['type'].key === 'semen')) &&
          <Block marginTop={1}>
            <Text bold size={16} color='primary' textAlign='left'>
              Is this product unique?
          </Text>
            <MessageBox status='primary' marginVertical={0.5}>
              If you reserve a unique product to a customer, it will no longer be displayed in the shop.
            </MessageBox>
            <Checkbox
              name='isUnique'
              formControl={formControl}
            >
              <Text semibold size={14}>
                Yes, it is unique.
              </Text>
            </Checkbox>
            <Block marginTop={1}>
              <Input
                disabled={values['isUnique']}
                name='quantity'
                label='Quantity'
                placeholder='10'
                keyboardType='numeric'
                formControl={formControl}
                width={96}
              />
            </Block>
          </Block>
        }
      </ContainerView>
    </Fragment>
  );
}

export default memo(ProductInformationPage, (props, nextProps) => {
  const valResult = isEqual(props.formControl.values, nextProps.formControl.values);
  const errResult = isEqual(props.formControl.errors, nextProps.formControl.errors);
  const touResult = isEqual(props.formControl.touched, nextProps.formControl.touched);
  return valResult && errResult && touResult;
});