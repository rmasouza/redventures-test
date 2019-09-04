import React from 'react';
import './Home.scss';
import Header from '../components/common/Header';
import HomeFooter from '../components/home/HomeFooter';
import HomeContent from '../components/home/HomeContent';

const Home = () => {
    return (
        <article className='home-page'>
            <Header />
            <HomeContent />
            <HomeFooter />
        </article>
    )
}

export default Home;