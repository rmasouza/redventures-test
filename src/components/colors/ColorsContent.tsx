import React, { useEffect } from 'react';
import Colors from '../../pages/Colors';
import ColorCarFigure from './ColorCarFigure';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/StoreProvider';
import ColorOptionComponent from './ColorOptionComponent';
import { ColortOption } from '../../models/Color';
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
        <section>
            <ColorCarFigure currentColor={store.currentColor}/>
            <aside>
                {
                    store.colors.map( it => 
                        <ColorOptionComponent key={it.id} color={it} setCurrentColor={onColorOptionClick}/>
                    )
                }
            </aside>
        </section>
    )
}
const ColorsContent = observer(ColorsContentBase);
export default ColorsContent;