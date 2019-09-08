import React, { FC } from 'react';
import { ColortOption } from '../../models/Color';
import './ColorOptionComponent.scss';

interface IColorOptionComponentProps {
    color: ColortOption;
    currentOption: ColortOption | null;
    setCurrentColor: (option: ColortOption) => void;
}
const ColorOptionComponent: FC<IColorOptionComponentProps> = (props: IColorOptionComponentProps) => {
    const { color, setCurrentColor, currentOption } = props;

    let isCurrent = currentOption == null ? false : currentOption.id == color.id;
    const onClick = () => {
        setCurrentColor(color);
    }

    return (
        <section 
            className={'color-option ' + `${isCurrent && '-current'}`} 
            onClick={onClick}>
            <img  className='option' src={`/static/images/dot-color-${color.id}.png`}/>
        </section>
    )
}
export default ColorOptionComponent;