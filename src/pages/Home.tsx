import React, { useEffect } from 'react';
import './Home.scss';
import Header from '../components/common/Header';
import HomeFooter from '../components/home/HomeFooter';
import HomeContent from '../components/home/HomeContent';
import { useStore } from '../stores/StoreProvider';

const Home = () => {
    const store = useStore();

    useEffect(() => {
        console.log(store)
        store.getApiResponse()
    })

    return (
        <article className='home-page'>
            <Header />
            <HomeContent />
            <HomeFooter />
        </article>
    )
}

export default Home;