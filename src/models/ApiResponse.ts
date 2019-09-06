import { EngineResponse } from './Engine';
import { ColorResponse } from './Color';
import { WheelResponse } from './Wheel';

export interface ApiResponse {
    price: number;
    engine: EngineResponse;
    color: ColorResponse;
    wheels: WheelResponse;
}