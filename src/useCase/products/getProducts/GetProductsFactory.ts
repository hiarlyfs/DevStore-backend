import GetProducts from './GetProducts'
import GetDefaultProductsImpl from './GetDefaultProductsImpl'
import GetOnlineProductsImpl from './GetOnlineProductsImpl'
import { ProductsPlace } from '../../../utils/ProductsPlace'

export default class GetProductFactory {
  public static createGetProducts(productsPlace: ProductsPlace): GetProducts {
    if (productsPlace === ProductsPlace.DEFAULT) {
      return new GetDefaultProductsImpl()
    }

    if (productsPlace === ProductsPlace.ONLINE) {
      return new GetOnlineProductsImpl()
    }

    throw new Error('Product place incorrect')
  }
}
