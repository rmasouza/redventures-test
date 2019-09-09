import React from 'react';
import './ResumeContent.scss';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/StoreProvider';
import ButtonLink from '../common/ButtonLink';
import useCurrency from '../../hooks/useCurrency';
import CircularArrow from '../common/icons/CircularArrow';

const ResumeContentBase = () => {
    const store = useStore();
    const {currentEngine} = store;
    const initialPrice = useCurrency(store.carSimulation.initialPrice);
    const finalPrice = useCurrency(store.finalPrice);
    
    const enginePrice = useCurrency(store.currentEngine!.price);
    const colorPrice = useCurrency(store.currentColor!.price);
    const wheelPrice = useCurrency(store.currentWheel!.price);

    const onButtonClick = () => {
        store.reset()
    }
    
    return (
        <section className='resume-conntent'>
            <h1 className='title'> Your <strong className='strong'>Model <span className='red'>R</span> </strong> </h1>
            <p className='line'>
                <span> Starting Price </span>
                <span className='price'> {initialPrice.formatted} </span>
            </p>
            <hr className='divisor'/>
            <p className='line'>
                <span> {`${currentEngine!.kwh} ${currentEngine!.type} - ${currentEngine!.kwh} kWh - ${currentEngine!.range} miles range`} </span>
                <span className='price'> {enginePrice.currency == 0 ? 'Included' : `+ ${enginePrice.formatted}` } </span>
            </p>
            <p className='line'>
                <span>  {store.currentColor!.label} </span>
                <span className='price'> {colorPrice.currency == 0 ? 'Included' : `+ ${colorPrice.formatted}` } </span>
            </p>
            <p className='line'>
                <span>  {store.currentWheel!.label} </span>
                <span className='price'> {wheelPrice.currency == 0 ? 'Included' : `+ ${wheelPrice.formatted}` } </span>
            </p>
            <hr className='divisor'/>
            <p className='line -bigger'>
                <span> Final Price </span>
                <span className='price'> {finalPrice.formatted} </span>
            </p>
            <section className='button'>
                <ButtonLink  text='Rebuild' to='/engines' icon={<CircularArrow/>} onButtonClick={onButtonClick}/>
            </section>
        </section>
    )
}


const ResumeContent = observer(ResumeContentBase)
export default ResumeContent;