import React from 'react';
import ColorsContent from '../components/colors/ColorsContent';
import SimulationResume from '../components/common/simulation/SimulationResume';
import { useStore } from '../stores/StoreProvider';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react-lite';
const ColorsBase = () => {
    const store = useStore()

    if(store.colors.length == 0) {
        return <Redirect to='/' />
    }

    return (
        <React.Fragment>
            <ColorsContent/>
            <SimulationResume/>
        </React.Fragment>
    )
}

const Colors = observer(ColorsBase)
export default Colors;