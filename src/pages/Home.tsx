import React, { useEffect } from 'react';
import './Home.scss';
import Header from '../components/common/Header';
import HomeFooter from '../components/home/HomeFooter';
import HomeContent from '../components/home/HomeContent';
import { useStore } from '../stores/StoreProvider';
import { observer } from 'mobx-react-lite';

const HomeBase = () => {
    const store = useStore();

    useEffect(() => {
         store.getApiResponse();
    },[])

    return (
        <article className='home-page'>
            <Header />
            <HomeContent />
            <HomeFooter />
        </article>
    )
}

const Home = observer(HomeBase)
export default Home;