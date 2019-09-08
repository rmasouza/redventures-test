import React, { FC } from 'react';
import './WheelOptionComponent.scss';
import { WheelOption } from '../../models/Wheel';

interface IWheelOptionComponentProps {
    wheel: WheelOption;
    currentOption: WheelOption | null;
    setCurrentWheel: (option: WheelOption) => void;
}

const WheelOptionComponent: FC<IWheelOptionComponentProps> = (props: IWheelOptionComponentProps) => {
    const { wheel, currentOption, setCurrentWheel } = props;

    let isCurrent = currentOption == null ? false : currentOption.id == wheel.id;

    const onClick = () => {
        setCurrentWheel(wheel)
    }

    return (
        <figure  className={'wheel-option ' + `${isCurrent && '-current'}`}  onClick={onClick}>
            <img className='figure' src={`/static/images/${wheel.id}.png`}/><img/>
            <figcaption className='caption'>
                {wheel.label}
            </figcaption>
            <span className='price'>
                {
                    wheel.price == 0 ? 'Included' : `+${wheel.price}`
                }
            </span>
        </figure>
    )
}

export default WheelOptionComponent;