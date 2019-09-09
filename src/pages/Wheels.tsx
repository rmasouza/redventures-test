import React from 'react';
import ResumeStepFooter from '../components/resume/ResumeStepFooter';
import WheelContent from '../components/wheels/WheelContent';
import { useStore } from '../stores/StoreProvider';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react-lite';

const WheelsBase = () => {
    const store = useStore()

    if(store.wheels.length == 0) {
        return <Redirect to='/' />
    }
    
    return (
        <React.Fragment>
            <WheelContent/>
            <ResumeStepFooter/>
        </React.Fragment>
    )
}

const Wheels = observer(WheelsBase);
export default Wheels;