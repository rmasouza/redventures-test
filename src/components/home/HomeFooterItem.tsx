import React, { FC } from 'react';
import './HomeFooterItem.scss';

interface IHomeFooterItem {
    value: number;
    unity: string;
    description: string;
}
const HomeFooterItem: FC<IHomeFooterItem> = ({ value, unity, description }) => {

    return (
        <p className='home-footer-item'>
            <strong className='value'>{value} <sub className='unity'>{unity}</sub> </strong>
            <span className='description'>{description}</span>
        </p>
    )
}

export default HomeFooterItem;