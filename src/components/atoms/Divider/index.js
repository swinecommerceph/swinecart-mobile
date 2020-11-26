import React from 'react';
import { Divider as UKDivider } from '@ui-kitten/components';

import Block from '../Block';

function Divider(props) {

    const {
        margin = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        marginTop = 0,
        marginHorizontal = 0,
        marginVertical = 0,
    } = props;

    return (
        <Block
            margin={margin}
            marginHorizontal={marginHorizontal}
            marginVertical={marginVertical}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginTop={marginTop}
        >
            <UKDivider />
        </Block>
    );
}

export default Divider;