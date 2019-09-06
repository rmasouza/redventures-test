import { CarSimulation } from '../models/CarSimulation';
import { observable, action, runInAction } from 'mobx';
import { ApiResponse } from '../models/ApiResponse';
import axios from 'axios';

export default class CarSimulationStore {
    private _apiResponse: ApiResponse | null = null;

    @observable carSimulation: CarSimulation;

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
}