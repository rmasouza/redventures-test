import React from 'react';
import './HomeContent.scss';
import ButtonLink from '../common/ButtonLink';
import ArrowIcon from '../common/icons/ArrowIcon';

const HomeContent = () => {
    return (
        <section className='home-content'>
            <div className='headline'>
                <h2 className='headline -red medium' style={{paddingLeft: 8}}>
                    Build your
                </h2>
                <h1 className='headline -featured -inline light'>
                    MODEL
                    <strong className='type'>R</strong>
                </h1>
            </div>
            <figure className='carfigure'>
                <img className='img' src={'/static/images/car-home.png'}/>
            </figure>
            <ButtonLink to={'/engines'} text={'Begin'} withLatterSpace icon={<ArrowIcon/>}/>
        </section>
    )
}

export default HomeContent;