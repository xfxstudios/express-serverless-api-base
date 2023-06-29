import express from 'express';
import route from './routes/app.routes';

const app = express();

app.use(route)

export default app;
