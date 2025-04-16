import express from 'express';
import bodyParser from 'body-parser';
import sensorDataRoutes from './routes/sensorDataRoutes';
import plantProfileRoutes from './routes/plantProfileRoutes'; // Import plant profile routes

const app = express();

app.use(bodyParser.json());

app.use('/api/sensor-data', sensorDataRoutes);
app.use('/api/plants', plantProfileRoutes); // Use the plant profile routes

app.get('/', (req, res) => {
    res.send('Plant Monitoring System Backend is running!');
});

export default app;
