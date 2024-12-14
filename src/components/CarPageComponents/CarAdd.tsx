import { Car } from '@/types/types';
import { FC } from 'react';

type CarAddProps = {
    car: Car;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    loading: boolean;
    error: string | null;
};

const CarAdd: FC<CarAddProps> = ({ car, handleChange, handleSubmit, loading, error }) => {
    return (
        <div>
            <h1>Add New Car</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Brand</label>
                    <input
                        type="text"
                        name="brand"
                        value={car.brand}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Model</label>
                    <input
                        type="text"
                        name="model"
                        value={car.model}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Year</label>
                    <input
                        type="number"
                        name="year"
                        value={car.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        value={car.color}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Drive Type</label>
                    <select name="drive" value={car.drive} onChange={handleChange} required>
                        <option value="" disabled>Select drive type</option>
                        <option value="front">Front</option>
                        <option value="rear">Rear</option>
                        <option value="all-wheel">All-Wheel</option>
                    </select>
                </div>
                <div>
                    <label>Fuel Type</label>
                    <select name="fuel" value={car.fuel} onChange={handleChange} required>
                        <option value="" disabled>Select fuel type</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="electric">Electric</option>
                    </select>
                </div>
                <div>
                    <label>Is Used?</label>
                    <input
                        type="checkbox"
                        name="isUsed"
                        checked={car.isUsed}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Adding...' : 'Add Car'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default CarAdd;
