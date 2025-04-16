// backend/src/controllers/plantProfileController.ts
import { Request, Response } from "express";
import { getPlantDetails, searchPlants, PerenualPlantDetails } from "../services/plantApiService";
import { createNewPlant, getPlants } from "../services/databaseService";

interface PlantProfileCreationRequest extends Request {
    body: {
        plantName: string;
        plantSpecies: string;
    };
}

async function createPlantProfile(req: Request, res: Response): Promise<Response> {
    const { plantName, plantSpecies } = req.body;

    if (!plantName || !plantSpecies) {
        return res.status(400).json({ error: 'Plant name and species are required.' });
    }

    try {
        // Search Perenual for the selected plant species
        const searchResults = await searchPlants(plantSpecies);

        if (!searchResults || searchResults.length === 0) {
            return res.status(404).json({ error: `Plant species "${plantSpecies}" not found on Perenual.` });
        }

        const firstResult = searchResults[0];
        const perenualPlantId = firstResult.id;

        // Fetch detailed plant information from Perenual
        const plantDetails: PerenualPlantDetails | null = await getPlantDetails(perenualPlantId);

        if (!plantDetails) {
            console.warn(`Could not retrieve details for plant ID ${perenualPlantId} from Perenual.`);
            // Still create a basic profile if details retrieval fails
        }

        // Store the plant profile in your local database
        const newPlantId: number = await createNewPlant(plantName, plantSpecies, plantDetails);

        return res.status(201).json({ message: 'Plant profile created', plantId: newPlantId });

    } catch (error: any) {
        console.error('Error creating plant profile:', error);
        return res.status(500).json({ error: 'Failed to create plant profile.' });
    }
}

async function getPlantProfiles(req: Request, res: Response): Promise<Response> {
    try {
        const plants = await getPlants();
        return res.json(plants);
    } catch (error: any) {
        console.error('Error fetching plants:', error);
        return res.status(500).json({ error: 'Failed to fetch plant profiles.' });
    }
}

export { createPlantProfile, getPlantProfiles };
