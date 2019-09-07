import React from 'react';
import './HomeContent.scss';
import ButtonLink from '../common/ButtonLink';
import ArrowIcon from '../common/icons/ArrowIcon';

const HomeContent = () => {
    return (
        <section className='home-content'>
            <div style={{margin: 0}}>
                <h3 className='headline -red medium' style={{paddingLeft: 8}}>
                    Build your
                </h3>
                <h1 className='headline -featured -inline light'>
                    MODEL
                    <strong className='headline -featured -red -inline medium' style={{marginLeft: 54}}>R</strong>
                </h1>
                
            </div>
            <figure className='carfigure'>
                <img src={'/static/images/car-home.png'} style={{marginTop: -64}}/>
            </figure>
            <ButtonLink to={'/engines'} text={'Begin'} withLatterSpace icon={<ArrowIcon/>}/>
        </section>
    )
}

export default HomeContent;