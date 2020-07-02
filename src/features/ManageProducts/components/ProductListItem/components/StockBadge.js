import React, { memo } from 'react';

import { Badge } from 'molecules';
import { Block } from 'atoms';

function StockBadge({ type, isUnique, quantity }) {
  return (
    <Block marginTop={0.5}>
      {
        type === 'semen'
          ? null
          : isUnique
            ? (
                <Badge
                  text='Unique'
                  backgroundColor='color-warning-700'
                />
              )
            : quantity <= 0
              ?
                (
                  <Badge
                    text='Out of Stock'
                    backgroundColor='color-danger-600'
                  />
                )
              :
                (
                  <Badge 
                    text={`Stock: ${quantity}`}
                    backgroundColor='color-primary-600' 
                  />
                )
      }
    </Block>
  );

}

export default memo(StockBadge);