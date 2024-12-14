"use client";

import axios from 'axios';
import { Car } from '@/types/types';
import React, { useEffect, useState } from 'react';
import CarList from '@/components/CarPageComponents/CarList';

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api`);
      setCars(res.data);
    } catch (error) {
      console.error('Error fetching smartphones:', error);
    }
  };

  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
};