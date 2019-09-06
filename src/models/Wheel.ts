export interface WheelOption {
    label: string;
    price: number;
    id: number;
}

export interface WheelResponse {
    items: Array<WheelOption>;
}