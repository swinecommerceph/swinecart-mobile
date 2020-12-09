import React, { memo } from 'react';
import clamp from 'lodash/clamp';

import {
  Block,
  Icon,
  Button
} from 'atoms';

const AddIcon = () => (
  <Icon name='plus' color='white1' size={20} />
);

const MinusIcon = () => (
  <Icon name='minus' color='white1' size={20}/>
);

function Stepper(props) {

  const {
    value,
    setValue,
    maxValue,
    minValue,
    step,
  } = props;

  const onPressIncre = () => {
    setValue(clamp(value + step, minValue, maxValue));
  };

  const onPressDecre = () => {
    setValue(clamp(value - step, minValue, maxValue));
  };

  return (
    <Block row center>
      <Button
        size='tiny'
        accessoryLeft={AddIcon}
        onPress={onPressIncre}
        marginRight={0.5}
      />
      <Button
        size='tiny'
        accessoryLeft={MinusIcon}
        onPress={onPressDecre}
      />
    </Block>
  );
}

export default memo(Stepper);