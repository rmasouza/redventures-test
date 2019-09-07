import React, { FC } from 'react';
import { ColortOption } from '../../models/Color';
// import './ColorOptionComponent,scss';

interface IColorOptionComponentProps {
    color: ColortOption;
    setCurrentColor: (option: ColortOption) => void;
}
const ColorOptionComponent: FC<IColorOptionComponentProps> = (props: IColorOptionComponentProps) => {
    const { color, setCurrentColor } = props;

    const onClick = () => {
        setCurrentColor(color);
    }

    return (
        <section onClick={onClick}>
            {color.label}
        </section>
    )
}
export default ColorOptionComponent;