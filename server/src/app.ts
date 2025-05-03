import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './util/errorHandler';
import config from './config';

const app = express();
console.log(JSON.stringify(config.allowedOrigins));
app.use(cors({
    origin: config.allowedOrigins,
    methods: ['GET', 'OPTIONS'],
}));
  
app.use(express.json());

app.use('/api', routes);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

export default app;