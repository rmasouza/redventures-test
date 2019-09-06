export interface EngineOption {
    type: string;
    kwh: number;
    range: number;
    price: number;
    id: number;
}

export interface EngineResponse {
    items: Array<EngineResponse>;
}