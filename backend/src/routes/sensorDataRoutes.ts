// backend/src/routes/sensorDataRoutes.ts
import express, { Request, Response } from 'express';
import { receiveSensorData } from '../controllers/sensorDataController';

const router = express.Router();

router.post('/', (req: Request, res: Response) => receiveSensorData(req, res));

export default router;
