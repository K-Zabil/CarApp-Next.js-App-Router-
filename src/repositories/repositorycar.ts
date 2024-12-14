import fs from 'fs';
import path from 'path';
import { Car } from '@/types/types';

const filePath = path.join(process.cwd(), 'src', 'lib', 'cars.json');

export default async function updateJsonFile(data: Car[]) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}