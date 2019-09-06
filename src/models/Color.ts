export interface ColortOption {
    hexadecimal: string;
    label: string;
    price: number;
    id: number;
}

export interface ColorResponse {
    description: string;
    items: Array<ColortOption>
}