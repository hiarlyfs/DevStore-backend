import GetProductsCase from './GetProductsCase'
import GetDefaultProductsCaseImpl from './GetDefaultProductsCaseImpl'
import { ProductsPlace } from '../../../utils/ProductsPlace'

export default class GetProductFactory {
  public static createGetProductsCase(
    productsPlace: ProductsPlace
  ): GetProductsCase {
    if (productsPlace === ProductsPlace.DEFAULT) {
      return new GetDefaultProductsCaseImpl()
    }

    throw new Error('Product place incorrect')
  }
}
