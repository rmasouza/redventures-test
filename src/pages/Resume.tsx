import React, { useEffect, useState } from 'react';
import ResumeLayout from '../components/resume/ResumeLayout';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/StoreProvider';
import ResumeCarFigure from '../components/resume/ResumeCarFigure';
import ResumeContent from '../components/resume/ResumeContent';
import { Redirect } from 'react-router';

const ResumeBase = () => {
    const store = useStore();

    if (!store.currentEngine || !store.currentColor || !store.currentWheel) {
        return <Redirect to='/' />
    }

    return (
        <ResumeLayout>
            <ResumeCarFigure currentColor={store.currentColor!} />
            <ResumeContent />
        </ResumeLayout>
    )
};

const Resume = observer(ResumeBase);
export default Resume;