import React, { FC } from 'react';
import './SimulationResume.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/StoreProvider';
import ButtonLink from '../ButtonLink';
import { withRouter, RouteProps } from 'react-router';
import ArrowIcon from '../icons/ArrowIcon';


const SimulationResumeBase: FC<RouteProps> = (props: RouteProps) => {
    const { location } = props;
    const store = useStore();


    const steps: Record<string, string> = {
        '/engines': '/colors',
        '/colors': '/wheels',
        '/wheels': '/resume',
    }

    const currentPath: string = location ? location.pathname : '/';

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
                <ButtonLink text={'next'} to={steps[currentPath]} icon={<ArrowIcon />} />
            </span>
        </footer>
    )
}

//@ts-ignore
const SimulationResume = withRouter(observer(SimulationResumeBase))

export default SimulationResume;