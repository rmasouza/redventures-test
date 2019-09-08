import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useLocalStore } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0
import CarSimulationStore from './CarSimulationStore';


const CarSimulationContext = React.createContext<CarSimulationStore | null>(null)

type StoreProviderPrps = PropsWithChildren<any>
export const StoreProvider: FC<StoreProviderPrps> = ({children}) => {
    const store = new CarSimulationStore()
    return (
        <CarSimulationContext.Provider value={store}>{children}</CarSimulationContext.Provider>
    )
}

export const useStore = (): CarSimulationStore => {
    const store = React.useContext<CarSimulationStore | null>(CarSimulationContext)
    if (!store) {
      
      throw new Error('You must use StoreProvider!')
    }
    return store
  }