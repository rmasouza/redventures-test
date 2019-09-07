import React from 'react';
import RedVenturesLogo from '../icons/RedVenturesLogo';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-component'>
            <Link to={'/'}>
                <RedVenturesLogo/> 
            </Link>
            <nav>
                
            </nav>
         </header>
    )
}

export default Header;