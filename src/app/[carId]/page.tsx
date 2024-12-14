"use client";

import axios from "axios";
import { Car } from "@/types/types";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import CarDetails from "@/components/CarPageComponents/CarDetails";
import CarEditForm from "@/components/CarPageComponents/CarEditForm";


export default function CarPage({ params }: { params: Promise<{ carId: string }> }) {
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { carId } = use(params);
    const router = useRouter();

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/${carId}`);
                if (res.status !== 200) throw new Error("Car not found");
                setCar(res.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [carId]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/${carId}`);
            if (res.status === 200) alert('Car deleted successfully');
            router.push('/');
        } catch (err: any) {
            alert('Failed to delete car');
        }
    };

    const handleUpdate = async (updatedCar: Car) => {
        try {
            const res = await axios.put(`http://localhost:3000/api/${carId}`, updatedCar);
            if (res.status === 200) {
                setCar(res.data);
                setIsEditing(false);
            }
        } catch (err: any) {
            alert('Failed to update car');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!car) return <div>Car not found</div>;

    return (
        <div className="car-page-container">
            <CarDetails car={car} />

            <div>
                <button className="car-page-button" onClick={handleEdit}>
                    Edit
                </button>
                <button className="car-page-button car-page-button-delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>

            {isEditing && car && (
                <div className="car-page-edit-form">
                    <CarEditForm
                        car={car}
                        onSave={handleUpdate}
                        onCancel={() => setIsEditing(false)}
                    />
                </div>
            )}
        </div>
    );
}