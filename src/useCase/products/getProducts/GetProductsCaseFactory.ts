import GetProductsCase from './GetProductsCase'
import GetLocalProductsCaseImpl from './GetLocalProductsCaseImpl'
import { ProductsPlace } from '../../../utils/ProductsPlace'

export default class GetProductFactory {
  public static createGetProductsCase(
    productsPlace: ProductsPlace
  ): GetProductsCase {
    if (productsPlace === ProductsPlace.LOCAL) {
      return new GetLocalProductsCaseImpl()
    }

    throw new Error('Product place incorrect')
  }
}
