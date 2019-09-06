import React from 'react';
import './Engines.scss';
import Header from '../components/common/Header';
import SimulationResume from '../components/common/simulation/SimulationResume';
import EngineContent from '../components/engines/EngineContent';

const Engines = () => {
    return (
        <article className='engines-page'>
            <Header />
            <EngineContent/>
            <SimulationResume/>
        </article>
    )
}

export default Engines;