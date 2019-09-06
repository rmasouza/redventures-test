import { EngineOption } from './Engine';
import { ColortOption } from './Color';
import { WheelOption } from './Wheel';
import { observable, action } from 'mobx';

export class CarSimulation {
    @observable initialPrice: number;
    engine: EngineOption | null = null;
    color: ColortOption | null = null;
    wheel: WheelOption | null = null;

    constructor()  {
        this.initialPrice = 0;
    }

    get finalPrice() : number {
        return this.initialPrice;
    } 
}