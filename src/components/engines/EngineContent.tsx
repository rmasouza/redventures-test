import React, { useEffect } from 'react';
import './EngineContent.scss';
import { observer } from 'mobx-react';
import EngineOptionComponent from './EngineOptionComponent';
import { useStore } from '../../stores/StoreProvider';
import { EngineOption } from '../../models/Engine';
import Container from '../common/layout/Container';
const EngineContentBase = () => {
    const store = useStore();

    useEffect(()=> {
        if(store.currentEngine == null) {
            const [firstDefault] = store.engines.filter(it => it.price == 0);
            store.setCurrentEngine(firstDefault);
        }
    }, [])

    const image = store.currentEngine == null ? '1.png' : `${store.currentEngine.id}.png`

    const onEngineOptionClick = (option: EngineOption) => {
        store.setCurrentEngine(option);
    }

    return (
        <Container className='engine-content'>
            <figure className='figure'>
                <img  className='img' src={`/static/images/${image}`}/>
            </figure>
            <section>
                <h1 className='title'>Engine</h1>
                {
                    store.engines.map( it => 
                        <EngineOptionComponent 
                            key={it.id} 
                            option={it} 
                            currentOption={store.currentEngine} 
                            setCurrentEngine={onEngineOptionClick}/>)
                }
            </section>
        </Container>
    )
}

const EngineContent = observer(EngineContentBase)
export default EngineContent;