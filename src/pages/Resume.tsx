import React, { useEffect, useState } from 'react';
import ResumeLayout from '../components/resume/ResumeLayout';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/StoreProvider';
import ResumeCarFigure from '../components/resume/ResumeCarFigure';
import ResumeContent from '../components/resume/ResumeContent';

const ResumeBase = () => {
    const [hasMounted, setHasMouted] = useState(false);
    const store = useStore();
    useEffect(()=> {
        store.getApiResponse().then(res => {
            // console.log(hasMounted)
            setHasMouted(true)
        })
    }, [])
    return (
        <ResumeLayout>
            {
                hasMounted && <ResumeCarFigure currentColor={store.currentColor!}/>
            }
            {
                hasMounted && <ResumeContent/>
            }
            
        </ResumeLayout>
    )
};

const Resume = observer(ResumeBase);
export default Resume;