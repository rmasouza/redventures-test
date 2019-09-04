import React from 'react';
import './HomeContent.scss';

const HomeContent = () => {
    return (
        <section className='home-content'>
            
            <h1 className='headline -red medium' style={{paddingLeft: 8}}>
                Build your
            </h1>
            <h1 className='headline -featured -inline light'>
                MODEL
            </h1>
            <h1 className='headline -featured -red -inline medium' style={{marginLeft: 54}}>R</h1>
        </section>
    )
}

export default HomeContent;