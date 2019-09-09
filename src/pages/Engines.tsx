import React from 'react';
import ResumeStepFooter from '../components/resume/ResumeStepFooter';
import EngineContent from '../components/engines/EngineContent';
import { useStore } from '../stores/StoreProvider';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react';

const EnginesBase = () => {
    const store = useStore()

    if(store.engines.length == 0) {
        return <Redirect to='/' />
    }
    
    return (
        <React.Fragment>
            <EngineContent/>
            <ResumeStepFooter/>
        </React.Fragment>
    )
}

const Engines =  observer(EnginesBase);
export default Engines;