import { Request, Response } from 'express'
import GetProducts from '../../useCase/products/getProducts/GetProducts'
import { Product } from '../../types/Product'
import { IGetProductsQueryParams } from './ProductRequestInterface'
import GetProductsImpl from '@useCase/products/getProducts/GetProductsImpl'

export default class ProductController {
  private getProducts: GetProducts

  constructor() {
    this.getProducts = new GetProductsImpl()
  }

  public getAllProducts = (
    req: Request<{}, {}, any, IGetProductsQueryParams>,
    res: Response
  ) => {
    const { category = '' } = req.query
    try {
      this.getProducts.getProducts(category.toString()).then((data) => {
        return res.send({
            products: data
	})
      })
    } catch (error) {
      return res.status(400).send({ error })
    }
  }

}
