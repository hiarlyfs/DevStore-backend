import { Database } from '@interfaces/database'
import { Request, Response } from 'express'

export default class ProductController {
  constructor(private databaseManager: Database) {
    this.databaseManager = databaseManager
  }

  public getProducts = (req: Request, res: Response) => {
    try {
      this.databaseManager
        .getProducts()
        .then((data) => res.send({ products: data }))
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: 'An error ocurred' })
    }
  }
}
