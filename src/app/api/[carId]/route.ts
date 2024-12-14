import { NextResponse } from "next/server";
import cars from "@/lib/cars.json";
import { Car } from "@/types/types";
import updateJsonFile from "@/repositories/repositorycar";

export async function GET(request: Request, { params }: { params: { carId: string } }) {
  const car = cars.find((car) => car.id === params.carId);
  if (!car) return NextResponse.json({ error: "Car not found" }, { status: 404 });
  return NextResponse.json(car);
}

export async function PUT(req: Request, { params }: { params: { carId: string } }) {
  const updatedCar: Car = await req.json();
  const carIndex = cars.findIndex((car => car.id === params.carId));
  if (carIndex === -1) return NextResponse.json({ error: 'Car not found' }, { status: 404 });
  cars[carIndex] = { ...cars[carIndex], ...updatedCar };
  await updateJsonFile(cars);
  return NextResponse.json(cars[carIndex]);
}

export async function DELETE(req: Request, { params }: { params: { carId: string } }) {
  try {
    const carIndex = cars.findIndex((car => car.id === params.carId));
    if (carIndex === -1) return NextResponse.json({ error: 'Car not found' }, { status: 404 });
    cars.splice(carIndex, 1);
    await updateJsonFile(cars);
    return NextResponse.json({ message: 'Car deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete car' }, { status: 500 });
  }
}