import React from 'react';
import './HomeFooter.scss';
import HomeFooterItem from './HomeFooterItem';

const HomeFooter = () => {

    return (
        <footer className='home-fotter'>
            <HomeFooterItem value={2.5} unity={'s'} description={'From 0 to 100'}/>
            <HomeFooterItem value={420} unity={'mi'} description={'Miles range'}/>
            <HomeFooterItem value={250} unity={'mp/h'} description={'Max speed'}/>
        </footer>
    )
}

export default HomeFooter;