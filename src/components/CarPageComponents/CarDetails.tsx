import { Car } from "@/types/types";

type CarDetailsProps = {
  car: Car;
};

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <div className="car-details-container">
      <h1 className="car-details-header">{car.brand} {car.model}</h1>

      <ul className="car-details-list">
        <li><strong>Year:</strong> {car.year}</li>
        <li><strong>Color:</strong> {car.color}</li>
        <li><strong>Price:</strong> <span className="car-details-price">${car.price}</span></li>
        <li><strong>Drive Type:</strong> {car.drive}</li>
        <li><strong>Fuel Type:</strong> {car.fuel}</li>
        <li><strong>Condition:</strong> {car.isUsed ? "Used" : "New"}</li>
      </ul>

      <div className="car-details-separator"></div>
    </div>
  );
}