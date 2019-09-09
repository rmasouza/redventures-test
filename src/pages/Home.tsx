import React, { useEffect } from 'react';
import HomeFooter from '../components/home/HomeFooter';
import HomeContent from '../components/home/HomeContent';
import { useStore } from '../stores/StoreProvider';
import { observer } from 'mobx-react-lite';

const HomeBase = () => {
    const store = useStore();

    useEffect(() => {
        try {
            store.getApiResponse();
        } catch (e) {
            console.error(e);
            alert('unable to get data from server')
        }
         
    },[])

    return (
        <React.Fragment>    
            <HomeContent />
            <HomeFooter />
        </React.Fragment>
    )
}

const Home = observer(HomeBase)
export default Home;