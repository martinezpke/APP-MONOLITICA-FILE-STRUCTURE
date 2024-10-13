import express, { json } from 'express';
import cors from 'cors';
import routes from './routes/routes.js'; // Importa las rutas de usuarios

const app = express();

// Middlewares
app.use(cors());
app.use(json());

app.use('/api/----', routes);

export default app;
