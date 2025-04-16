import express from "express";
import { createPlantProfile, getPlantProfiles } from "../controllers/plantProfileController";

const router = express.Router();

router.post('/', (req: Request, res: Response) => createPlantProfile(req, res));
router.get('/', (req: Request, res: Response) => getPlantProfiles(req, res));

export default router;
