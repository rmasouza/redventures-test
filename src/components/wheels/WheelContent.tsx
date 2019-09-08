import React, { useEffect } from 'react';
import './WheelContent.scss';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/StoreProvider';
import WheelOptionComponent from './WheelOptionComponent';
import { WheelOption } from '../../models/Wheel';

const WheelContentBase = () => {
    const store = useStore();

    const onWheelOptionClick = (option: WheelOption) => {
        store.setCurrentWheel(option);
    }

    useEffect(()=> {
        if(store.currentWheel == null) {
            const [firstDefault] = store.wheels.filter(it => it.price == 0);
            store.setCurrentWheel(firstDefault);
        }
    }, [])

    return (
        <section className='wheel-content'>
            <h1 className='title'> Wheels </h1>
            <section className='list'>
                {
                    store.wheels.map( it => 
                        <WheelOptionComponent 
                            key={it.id}
                            wheel={it}
                            currentOption={store.currentWheel}
                            setCurrentWheel={onWheelOptionClick}
                            />
                    )
                }
            </section>
        </section>
    )
}

const WheelContent = observer(WheelContentBase);
export default WheelContent;