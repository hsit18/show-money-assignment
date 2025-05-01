import express from 'express';
import routes from './routes';
import { errorHandler } from './util/errorHandler';

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

export default app;