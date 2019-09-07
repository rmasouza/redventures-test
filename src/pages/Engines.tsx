import React from 'react';
import './Engines.scss';
import SimulationResume from '../components/common/simulation/SimulationResume';
import EngineContent from '../components/engines/EngineContent';

const Engines = () => {
    return (
        <React.Fragment>
            <EngineContent/>
            <SimulationResume/>
        </React.Fragment>
    )
}

export default Engines;