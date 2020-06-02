import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(_: Request, res: Response) {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-us02.gitpod.io/uploads/${item.image}`
      }
    })
    return res.json(serializedItems)
  }
}

export default ItemsController;