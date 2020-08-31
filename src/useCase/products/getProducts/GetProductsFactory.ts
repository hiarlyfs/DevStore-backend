import GetProducts from './GetProducts'
import GetDefaultProductsImpl from './GetDefaultProductsImpl'
import { ProductsPlace } from '../../../utils/ProductsPlace'

export default class GetProductFactory {
  public static createGetProducts(productsPlace: ProductsPlace): GetProducts {
    if (productsPlace === ProductsPlace.DEFAULT) {
      return new GetDefaultProductsImpl()
    }

    throw new Error('Product place incorrect')
  }
}
