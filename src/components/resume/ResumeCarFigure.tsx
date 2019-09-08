import React, { FC } from 'react'
import './ResumeCarFigure.scss';
import { ColortOption } from '../../models/Color';

interface IResumeCarFigureProps {
    currentColor: ColortOption;
}
const ResumeCarFigure: FC<IResumeCarFigureProps> = (props: IResumeCarFigureProps) => {
    const { currentColor } = props;
    return (
        <figure className='resume-car-figure'>
            <img className='image' src={`/static/images/final-${currentColor.id}.png`}/>
        </figure>
    )
}

export default ResumeCarFigure;