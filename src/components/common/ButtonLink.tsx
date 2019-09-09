import React, { ReactNode, FC, ReactElement } from 'react';
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import './ButtonLink.scss';

interface IButtonLinkProps {
    to: string;
    text: string;
    icon?: ReactNode;
    withLatterSpace?: boolean;
    onButtonClick?: () => void;
}

type ButtonLinkProps = RouteComponentProps<any> & IButtonLinkProps
const ButtonLinkBase: FC<ButtonLinkProps> = (props: ButtonLinkProps) => {
    const {to, text, icon, withLatterSpace, history, onButtonClick} = props;

    const onClick = () => {
        if(onButtonClick) {
            onButtonClick()
        }

        history.push(to);
    }

    return (
        <section className='button-link' onClick={onClick}>
            <span className={`text ${withLatterSpace && '-with-latter-space'}`}>{text}</span>
            <span className='icon'>
                {icon}
            </span>
        </section>
    )
}

ButtonLinkBase.defaultProps = {
    withLatterSpace: false,
}

const ButtonLink = withRouter(ButtonLinkBase)
export default ButtonLink;