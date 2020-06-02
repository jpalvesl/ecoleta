import { Router } from 'express';
import knex from './database/connection';

const routes = Router()

routes.get('/items', async(req, res) => {
  const items = await knex('items').select('*')

  const serializedItems = items.map(item => {
    return {
      title: item.title,
      image_url: `https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-us02.gitpod.io/uploads/${item.image}`
    }
  })


  return res.json(serializedItems)
})

export default routes;