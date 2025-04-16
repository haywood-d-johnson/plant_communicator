import fetch, { Response } from "node-fetch";
import dotenv from "dotenv";


dotenv.config();

const PERENUAL_API_KEY: string | undefined = process.env.PERENUAL_API_KEY;
const BASE_URL = 'https://perenual.com/api';

interface PerenualPlantDetails {
    id: number;
    common_name: string;
    scientific_name: string[];
    other_name?: string[];
    cycle: string;
    watering: string;
    sunlight: string[];
    default_image?: {
        regular_url: string;
    }
}

interface PerenualPlantDetailsResponse {
    data: PerenualPlantDetails;
}

interface PerenualSearchResponse {
    data: {
        id: number;
        common_name: string;
        scientific_name: string[];
    }[];
}

async function getPlantDetails(plantID: number): Promise<PerenualPlantDetails | null> {
    if (!PERENUAL_API_KEY) {
        console.error('PERENUAL_API_KEY is not set in the environment.');
        return null;
    }

    try {
        const res: Response = await fetch(`${BASE_URL}/species/details/${plantID}?key=${PERENUAL_API_KEY}`);
            if (!res.ok) {
                console.error(`Perenual API Error: ${res.status}`);
                return null;
            }
        const data: PerenualPlantDetailsResponse = await res.json()  as PerenualPlantDetailsResponse;
        return data.data;
    } catch (error) {
        console.error('Error fetching plant details from Perenual:', error);
        return null;
    }
}

async function searchPlants(query: string): Promise<PerenualSearchResponse['data'] | null> {
    if (!PERENUAL_API_KEY) {
        console.error('PERENUAL_API_KEY is not set in the environment.');
        return null;
    }
    try {
        const response: Response = await fetch(`${BASE_URL}/species-list?key=${PERENUAL_API_KEY}&q=${query}`);
        if (!response.ok) {
            console.error(`Perenual API Error: ${response.status}`);
            return null;
        }
        const data: PerenualSearchResponse = await response.json() as PerenualSearchResponse;
        return data.data;
    } catch (error) {
        console.error('Error searching plants on Perenual:', error);
        return null;
    }
}

export { getPlantDetails, searchPlants, PerenualPlantDetails };
