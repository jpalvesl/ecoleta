import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsContoller from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router()
const upload = multer(multerConfig)

const pointsContoller = new PointsContoller()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', upload.single('image'), pointsContoller.create)
routes.get('/points/', pointsContoller.index)
routes.get('/points/:id', pointsContoller.show)


export default routes;
