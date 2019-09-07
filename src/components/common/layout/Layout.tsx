import React, { FC, PropsWithChildren } from 'react';
import './Layout.scss';
import { type } from 'os';
import Header from './Header';

interface ILayoutProps {}

type LayoutProps = PropsWithChildren<ILayoutProps>;

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
    const { children } = props;
    return (
        <article className='layout-component'>
            <Header/>
            {children}
        </article>
    )
}

export default Layout;