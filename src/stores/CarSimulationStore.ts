import { CarSimulation } from '../models/CarSimulation';
import { observable, action } from 'mobx';
import { ApiResponse } from '../models/ApiResponse';
import axios from 'axios';

export default class CarSimulationStore {
    private _apiResponse: ApiResponse | null = null;

    carSimulation: CarSimulation = new CarSimulation();

    
    getApiResponse = async () => {
        const result = await axios.get<{data:ApiResponse}>('https://next.json-generator.com/api/json/get/41ORKNZDU');
        this._apiResponse = result.data.data;
    }
}