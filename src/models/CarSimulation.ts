import { EngineOption } from './Engine';
import { ColortOption } from './Color';
import { WheelOption } from './Wheel';
import { observable, action, computed } from 'mobx';

export class CarSimulation {
    @observable initialPrice: number;
    @observable engine: EngineOption | null = null;
    @observable color: ColortOption | null = null;
    @observable wheel: WheelOption | null = null;

    constructor()  {
        this.initialPrice = 0;
    }

    @computed get finalPrice() : number {
        let price: number = this.initialPrice;

        if(this.engine) {
            price += this.engine.price;
        }

        if(this.color) {
            price += this.color.price;
        }

        if(this.wheel) {
            price += this.wheel.price;
        }

        return price;
    } 
}