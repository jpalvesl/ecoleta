import { Router } from 'express';

import PointsContoller from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router()
const pointsContoller = new PointsContoller()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointsContoller.create)
routes.get('/points/', pointsContoller.index)
routes.get('/points/:id', pointsContoller.show)


export default routes;
