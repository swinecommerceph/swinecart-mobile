import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

function Container() {

    useFocusEffect(
        useCallback(() => {
            return () => {

            }
        }, [])
    );

    return (
        <Fragment>
            <HeaderBar title='Farms' accessoryLeft={BackButton} />
        </Fragment>
    );
}

export default memo(Container);