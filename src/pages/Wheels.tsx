import React from 'react';
import SimulationResume from '../components/common/simulation/SimulationResume';
import WheelContent from '../components/wheels/WheelContent';
import { useStore } from '../stores/StoreProvider';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react-lite';

const WheelsBase = () => {
    const store = useStore()

    if(!store.currentWheel) {
        return <Redirect to='/' />
    }
    
    return (
        <React.Fragment>
            <WheelContent/>
            <SimulationResume/>
        </React.Fragment>
    )
}

const Wheels = observer(WheelsBase);
export default Wheels;