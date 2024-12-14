"use client";

import { useState } from "react";
import { Car } from "@/types/types";
import Link from "next/link";

type CarListProps = {
  cars: Car[];
};

export default function CarList({ cars }: CarListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCars = cars.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cars.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="car-grid">
        {paginatedCars.map((car) => (
          <div key={car.id} className="car-card">
            <h2>
              <Link href={`/${car.id}`}>
                {car.brand} {car.model}
              </Link>
            </h2>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Color:</strong> {car.color}</p>
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Drive Type:</strong> {car.drive}</p>
            <p><strong>Fuel Type:</strong> {car.fuel}</p>
            <p><strong>Condition:</strong> {car.isUsed ? "Used" : "New"}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}