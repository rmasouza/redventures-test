import { CarSimulation } from '../models/CarSimulation';
import { observable, action, runInAction, computed } from 'mobx';
import { ApiResponse } from '../models/ApiResponse';
import axios from 'axios';
import { EngineOption } from '../models/Engine';
import { WheelOption } from '../models/Wheel';
import { ColortOption } from '../models/Color';

export default class CarSimulationStore {
    private _apiResponse: ApiResponse | null = null;

    @observable carSimulation: CarSimulation;
    

    @computed get engines (): Array<EngineOption> {
        return this._apiResponse === null ? [] : this._apiResponse.engine.items;
    }

    @computed get currentEngine(): EngineOption | null {
        return this.carSimulation.engine;
    };

    @computed get colors (): Array<ColortOption> {
        return this._apiResponse === null ? [] : this._apiResponse.color.items;
    }

    @computed get colorDescription (): string {
        return this._apiResponse === null ? '' : this._apiResponse.color.description;
    }

    @computed get currentColor (): ColortOption | null {
        return this.carSimulation.color;
    }

    @computed get wheels (): Array<WheelOption> {
        return this._apiResponse === null ? [] : this._apiResponse.wheels.items;
    }

    @computed get finalPrice () : number {
        return this.carSimulation.finalPrice;
    }

    constructor() {
        this.carSimulation = new CarSimulation();
    }
    
    getApiResponse = async () => {
        console.log('calling api')
        const result = await axios.get<{data:ApiResponse}>('https://next.json-generator.com/api/json/get/41ORKNZDU');
        
        runInAction(() => {
            this._apiResponse = result.data.data;
            this.carSimulation.initialPrice = this._apiResponse.price;
        })
    }

    @action
    setCurrentEngine = (engine: EngineOption) => {
        this.carSimulation.engine = engine;
    }

    @action
    setCurrentColor = (color: ColortOption) => {
        this.carSimulation.color = color;
    }
}