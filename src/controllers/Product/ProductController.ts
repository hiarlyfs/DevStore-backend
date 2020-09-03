import { Request, Response } from 'express'
import GetProducts from '../../useCase/products/getProducts/GetProducts'
import { Product } from '../../types/Product'
import {
  IGetProductsQueryParams,
  IAddProductBody
} from './ProductRequestInterface'
import GetProductsImpl from '@useCase/products/getProducts/GetProductsImpl'
import AddProduct from '@useCase/products/addProduct'

export default class ProductController {
  private getProducts: GetProducts
  private addProduct: AddProduct

  constructor() {
    this.getProducts = new GetProductsImpl()
    this.addProduct = new AddProduct()
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

  public crateProduct = async (
    req: Request<any, any, IAddProductBody>,
    res: Response
  ) => {
    try {
      const newProduct = await this.addProduct.addNewProduct({
        ...req.body,
        image: req.file,
        price: Number.parseFloat(req.body.price)
      })

      console.log(newProduct)
      return res.send({ ...newProduct })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'An error occurred' })
    }
  }
}
