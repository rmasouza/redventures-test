import React from 'react';
import './Colors.scss';
import ColorsContent from '../components/colors/ColorsContent';
import SimulationResume from '../components/common/simulation/SimulationResume';
const Colors = () => {

    return (
        <React.Fragment>
            <ColorsContent/>
            <SimulationResume/>
        </React.Fragment>
    )
}

export default Colors;