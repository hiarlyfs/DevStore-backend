import { Database } from '@interfaces/database'
import LocalDatabase from './localDatabase'
import { ProductsPlace } from 'src/utils/ProductsPlace'

export default class DatabaseManagerFactory {
  public static createDbManager(productsPlace: ProductsPlace): Database {
    if (productsPlace === ProductsPlace.LOCAL) {
      return new LocalDatabase()
    }

    throw new Error('Product Place incorrect')
  }
}
