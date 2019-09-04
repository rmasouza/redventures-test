import React from 'react';
import './HomeContent.scss';
import CarHome from "../../assets/images/car-home.png";

const HomeContent = () => {
    return (
        <section className='home-content'>
            <header>
                <h1 className='headline -red medium' style={{paddingLeft: 8}}>
                    Build your
                </h1>
                <h1 className='headline -featured -inline light'>
                    MODEL
                </h1>
                <h1 className='headline -featured -red -inline medium' style={{marginLeft: 54}}>R</h1>
            </header>
            <figure className='carfigure'>
                <img src={CarHome} style={{marginTop: -64}}/>
            </figure>
        </section>
    )
}

export default HomeContent;