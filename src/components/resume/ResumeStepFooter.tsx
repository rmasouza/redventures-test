import React, { FC, useEffect } from 'react';
import './ResumeStepFooter.scss';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/StoreProvider';
import ButtonLink from '../common/ButtonLink';
import { withRouter, RouteProps } from 'react-router';
import ArrowIcon from '../common/icons/ArrowIcon';
import useCurrency from '../../hooks/useCurrency';

const ResumeStepFooterBase: FC<RouteProps> = (props: RouteProps) => {
    const { location } = props;
    const store = useStore();
    const finalPrice = useCurrency(store.finalPrice);

    const steps: Record<string, string> = {
        '/engines': '/colors',
        '/colors': '/wheels',
        '/wheels': '/resume',
    }

    const currentPath: string = location ? location.pathname : '/';

    useEffect(()=> {
        finalPrice.setCurrency(store.finalPrice)
    }, [store.finalPrice])

    return (
        <footer className='resume-step'>
            <section className='total'>
                <label className='label'>Total</label>
                <span className='price'>{finalPrice.formatted}</span>
            </section>

            <section className='model'>Model R</section>

            <section className='engine'>
                {
                    store.currentEngine && <>
                        {store.currentEngine.kwh}  <strong className='strong'>{store.currentEngine.type}</strong>
                    </>
                }
            </section>
            
            <section className='color'>
                {
                    store.currentColor && <img className='img' src={`/static/images/dot-color-${store.currentColor.id}.png`} />
                }
            </section>

            <section className='wheel'>
                {
                    store.currentWheel && <img className='img' src={`/static/images/${store.currentWheel.id}.png`} />
                }
            </section>

            <section>
                <ButtonLink text={'next'} to={steps[currentPath]} icon={<ArrowIcon />} />
            </section>
        </footer>
    )
}

//@ts-ignore
const ResumeStepFooter = withRouter(observer(ResumeStepFooterBase))

export default ResumeStepFooter;