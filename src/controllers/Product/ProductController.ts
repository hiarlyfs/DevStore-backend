import { Request, Response } from 'express'
import { ProductsPlace, getEnumByValue } from '../../utils/ProductsPlace'
import GetProductsCase from '../../useCase/products/getProducts/GetProductsCase'
import GetProductFactory from '../../useCase/products/getProducts/GetProductsCaseFactory'
import { Product } from '../../types/Product'
import { IGetProductsQueryParams } from './ProductRequestInterface'

export default class ProductController {
  public getProducts = (
    req: Request<{}, {}, any, IGetProductsQueryParams>,
    res: Response
  ) => {
    const { place = 'all', category = '' } = req.query
    try {
      const placeProducts: ProductsPlace = getEnumByValue(place.toString())

      const getProductsCase: GetProductsCase = GetProductFactory.createGetProductsCase(
        placeProducts
      )

      getProductsCase.getProducts(category.toString()).then((data) => {
        return res.send({
          products: data.map((product) => this.serializeProduct(product))
        })
      })
    } catch (error) {
      return res.status(400).send({ error })
    }
  }

  private serializeProduct = (product: Product) => {
    return {
      ...product,
      image: `${process.env.BASE_URL}/uploads/${product.image}`
    }
  }
}
