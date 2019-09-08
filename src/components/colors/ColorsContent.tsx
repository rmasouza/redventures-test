import React, { useEffect } from 'react';
import './ColorsContent.scss';
import ColorCarFigure from './ColorCarFigure';
import ColorOptionComponent from './ColorOptionComponent';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/StoreProvider';
import { ColortOption } from '../../models/Color';
import ColorOptionList from './ColorOptionList';
import Colors from '../../pages/Colors';

const ColorsContentBase = () => {
    const store = useStore();
    useEffect(()=> {
        if(store.currentColor == null) {
            const [firstDefault] = store.colors.filter(it => it.price == 0);
            store.setCurrentColor(firstDefault);
        }
    }, [])

    const onColorOptionClick = (option: ColortOption) => {
        store.setCurrentColor(option);
    }


    return (
        <section className='color-content'>
            <ColorCarFigure currentColor={store.currentColor}/>
            <ColorOptionList colors={store.colors} currentOption={store.currentColor} description={store.colorDescription} onColorOptionClick={onColorOptionClick}/>
        </section>
    )
}
const ColorsContent = observer(ColorsContentBase);
export default ColorsContent;