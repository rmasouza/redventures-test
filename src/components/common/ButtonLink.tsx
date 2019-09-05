import React, { ReactNode, FC, ReactElement } from 'react';
import { Link } from "react-router-dom";

import './ButtonLink.scss';

interface IButtonLinkProps {
    to: string;
    text: string;
    icon?: ReactNode;
    withLatterSpace?: boolean;
}
const ButtonLink: FC<IButtonLinkProps> = ({to, text, icon, withLatterSpace}) => {
    return (
        <Link to={to} className='button-link'>
            <span className={`text ${withLatterSpace && '-with-latter-space'}`}>{text}</span>
            <span className='icon'>
                {icon}
            </span>
        </Link>
    )
}

ButtonLink.defaultProps = {
    withLatterSpace: false,
}

export default ButtonLink;