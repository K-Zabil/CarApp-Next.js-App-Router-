export type DriveType = 'rear' | 'front' | 'all-wheel';

export type FuelType = 'diesel' | 'petrol' | 'electric';

export type Car = {
    id: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    drive: DriveType | string;
    fuel: FuelType | string;
    isUsed: boolean;
}