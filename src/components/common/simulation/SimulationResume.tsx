import React from 'react';
import './SimulationResume.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/StoreProvider';

const SimulationResumeBase = () => {
    const store = useStore();
    
    return (
        <footer className='simulation-resume'>
            <span>{store.finalPrice}</span>

            <span>Model R</span>

            <span>
            {
                store.currentEngine && `${store.currentEngine.kwh} ${store.currentEngine.type}`
            }
            </span>

            
            <span>

            </span>
            <span>

            </span>
        </footer>
    )
}

const SimulationResume = observer(SimulationResumeBase)

export default SimulationResume;