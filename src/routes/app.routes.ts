import { Router } from 'express';
import {AppController} from '../controllers/app.controller';

const route = Router()
const controller = new AppController()


route.get('/test', controller.getTest);
route.get('/testWithParam/:name', controller.getTestWithParams);


export default route;