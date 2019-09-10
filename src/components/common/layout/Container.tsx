import React, { FC } from 'react';
import './Container.scss';

interface IContainerProps {
    className?: string;
}

const Container: FC<IContainerProps> = ({children, className}) => {
    return (
        <section className={`${className} container-component`}>
            {children}
        </section>
    )
}

export default Container;