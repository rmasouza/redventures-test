import React, { FC } from 'react';
import './ColorCarFigure';
import { ColortOption } from '../../models/Color';

interface IColorCarFigureProps {
    currentColor: ColortOption | null
}

const ColorCarFigure: FC<IColorCarFigureProps> = (props: IColorCarFigureProps) => {
    const {currentColor} = props;
    const image = props.currentColor == null ? '4.png' : `${props.currentColor.id}.png`

    return (
        <figure>
            <img src={`/static/images/${image}`}/>
            {
                currentColor && <>
                    <figcaption>
                        {currentColor.label}
                    </figcaption>
                    <span> 
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