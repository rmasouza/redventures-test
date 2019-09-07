import React, { FC } from 'react';
import './EngineOptionComponent.scss';
import { EngineOption } from '../../models/Engine';

interface IEngineOptionComponentProps {
    option: EngineOption;
    currentOption: EngineOption | null;
    setCurrentEngine: (option: EngineOption) => void;
}

const EngineOptionComponent: FC<IEngineOptionComponentProps> = (props: IEngineOptionComponentProps) => {
    const { option, currentOption, setCurrentEngine } = props;

    let isCurrent = currentOption == null ? false : currentOption.id == option.id;


    const onClick = () => {
        setCurrentEngine(option);
    }

    return (
        <section 
            className={'engine-option ' + `${isCurrent && '-current'}`} 
            data-price={isCurrent && option.price > 0 ? `+${option.price}` : ''} 
            onClick={onClick}>

            <div className={'primary-text'}>
                {option.kwh} <span className={'strong'}>{option.type}</span>
            </div>
            <div className={'secondary-text'}> {option.kwh} kWh </div>
            <div className={'secondary-text'}> {option.range} miles range</div>
            <div className={'indicator'}></div>
        </section>
    )
}

export default EngineOptionComponent;