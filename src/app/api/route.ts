import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { Car } from "@/types/types";
import cars from "@/lib/cars.json";
import updateJsonFile from "@/repositories/repositorycar";

export async function GET() {
  return NextResponse.json(cars);
}

export async function POST(req: Request) {
  try {
    const newCar: Car = await req.json();
    newCar.id = uuidv4();
    const carsCopy = [...cars];
    carsCopy.push(newCar);
    await updateJsonFile(carsCopy);
    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create car' }, { status: 500 });
  }
}