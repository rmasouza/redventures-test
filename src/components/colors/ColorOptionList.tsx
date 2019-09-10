import React, { FC } from 'react';
import './ColorOptionList.scss';
import { ColortOption } from '../../models/Color';
import ColorOptionComponent from './ColorOptionComponent';


interface ColorOptionList {
    colors: Array<ColortOption>;
    description: string;
    currentOption: ColortOption | null;
    onColorOptionClick: (options: ColortOption) => void;
}

const ColorOptionList: FC<ColorOptionList> = (props: ColorOptionList) => {
    const { colors, description, currentOption, onColorOptionClick } = props;
    return (
        <section className='color-option-list'>
            <h1 className='title'>Color</h1>
            <p className='description'> {description} </p>
            <section className='list'>
            {
                colors.map(it =>
                    <ColorOptionComponent key={it.id} color={it} setCurrentColor={onColorOptionClick} currentOption={currentOption} />
                )
            }
            </section>
        </section>
    )
}

export default ColorOptionList;