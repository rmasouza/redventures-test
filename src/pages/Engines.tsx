import React from 'react';
import SimulationResume from '../components/common/simulation/SimulationResume';
import EngineContent from '../components/engines/EngineContent';
import { useStore } from '../stores/StoreProvider';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react';

const EnginesBase = () => {
    const store = useStore()

    if(!store.currentEngine) {
        return <Redirect to='/' />
    }
    
    return (
        <React.Fragment>
            <EngineContent/>
            <SimulationResume/>
        </React.Fragment>
    )
}

const Engines =  observer(EnginesBase);
export default Engines;