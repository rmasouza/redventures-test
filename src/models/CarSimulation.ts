import { EngineOption } from './Engine';
import { ColortOption } from './Color';
import { WheelOption } from './Wheel';

export class CarSimulation {
    initialPrice: number = 0;
    engine: EngineOption | null = null;
    color: ColortOption | null = null;
    wheel: WheelOption | null = null;

    get finalPrice() : number {
        return this.initialPrice;
    } 
}