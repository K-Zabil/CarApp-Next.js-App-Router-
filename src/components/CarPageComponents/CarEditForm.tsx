import { Car } from "@/types/types";
import { useState } from "react";

type CarEditFormProps = {
    car: Car;
    onSave: (updatedCar: Car) => void;
    onCancel: () => void;
};

export default function CarEditForm({ car, onSave, onCancel }: CarEditFormProps) {
    const [formData, setFormData] = useState<Car>(car);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'drive' || name === 'fuel' ? value : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="car-edit-form-container">
            <h3>Edit Car</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="drive">Drive Type</label>
                    <select
                        id="drive"
                        name="drive"
                        value={formData.drive}
                        onChange={handleChange}
                    >
                        <option value="rear">Rear</option>
                        <option value="front">Front</option>
                        <option value="all-wheel">All-Wheel</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fuel">Fuel Type</label>
                    <select
                        id="fuel"
                        name="fuel"
                        value={formData.fuel}
                        onChange={handleChange}
                    >
                        <option value="diesel">Diesel</option>
                        <option value="petrol">Petrol</option>
                        <option value="electric">Electric</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="isUsed">Is Used</label>
                    <input
                        type="checkbox"
                        id="isUsed"
                        name="isUsed"
                        checked={formData.isUsed}
                        onChange={(e) => setFormData({ ...formData, isUsed: e.target.checked })}
                    />
                </div>
                <div className="car-edit-form-buttons">
                    <button type="submit">Save Changes</button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="cancel-button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}