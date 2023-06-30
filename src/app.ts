import express from 'express';
import route from './routes/app.routes';
import {IncommingLog} from './middleware/incommingLog';

const app = express();

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true}));
app.use(IncommingLog)
app.use(route)

export default app;
