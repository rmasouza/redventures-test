import React from 'react';
import ColorsContent from '../components/colors/ColorsContent';
import ResumeStepFooter from '../components/resume/ResumeStepFooter';
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
            <ResumeStepFooter/>
        </React.Fragment>
    )
}

const Colors = observer(ColorsBase)
export default Colors;