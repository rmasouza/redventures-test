import React, { FC } from 'react';
import './ColorCarFigure.scss';
import { ColortOption } from '../../models/Color';

interface IColorCarFigureProps {
    currentColor: ColortOption | null
}

const ColorCarFigure: FC<IColorCarFigureProps> = (props: IColorCarFigureProps) => {
    const {currentColor} = props;
    const image = props.currentColor == null ? '4.png' : `${props.currentColor.id}.png`

    return (
        <figure className='color-car-figure'>
            <img className='figure' src={`/static/images/${image}`}/>
            {
                currentColor && <>
                    <figcaption className='caption'>
                        {currentColor.label}
                    </figcaption>
                    <span className='price'> 
                        {
                            currentColor.price == 0 ? 'Included' : `+${currentColor.price}`
                        }
                    </span>
                </>
            }
        </figure>
    )
}

export default ColorCarFigure;