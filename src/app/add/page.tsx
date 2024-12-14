"use client";

import { useState } from 'react';
import axios from 'axios';
import CarAdd from '@/components/CarPageComponents/CarAdd';
import { Car } from '@/types/types';

const initialCar: Car = {
    id: '',
    brand: '',
    model: '',
    year: 2024,
    color: '',
    price: 0,
    drive: '',
    fuel: '',
    isUsed: false,
};

const AddCarPage = () => {
    const [car, setCar] = useState<Car>(initialCar);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value } = e.target;
        const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;
        setCar((prevCar) => ({
            ...prevCar,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post('http://localhost:3000/api', car);
            if (res.status >= 200 && res.status < 300) {
                alert('Car added successfully');
                setCar(initialCar);
            } else {
                throw new Error(`Unexpected status code: ${res.status}`);
            }
        } catch (error: any) {
            setError(error.response?.data?.message || 'Failed to add car');
        } finally {
            setLoading(false);
        }
    };

    return (
        <CarAdd
            car={car}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
        />
    );
};

export default AddCarPage;