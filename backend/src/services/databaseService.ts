import * as sqlite3 from 'sqlite3';
import { PerenualPlantDetails } from './plantApiService';

const db = new sqlite3.Database('./plant_data.db');

interface Plant {
    plantId: number;
    plantName: string;
    plantSpecies: string;
}

async function createNewPlant(plantName: string, plantSpecies: string, plantDetails: PerenualPlantDetails | null): Promise<number> {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO plants (plantName, plantSpecies /*, other_fields */) VALUES (?, ? /*, ? */)',
            [plantName, plantSpecies /*, plantDetails?.some_property */],
            function (err) {
                if (err) {
                    console.error('Error creating new plant:', err.message);
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            }
        );
    });
}

async function getPlants(): Promise<Plant[]> {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM plants', [], (err, rows: Plant[]) => {
            if (err) {
                console.error('Error fetching plants:', err.message);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

export { createNewPlant, getPlants, Plant };
