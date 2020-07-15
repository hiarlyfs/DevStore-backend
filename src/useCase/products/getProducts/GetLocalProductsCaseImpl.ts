import GetProductsCase from './GetProductsCase'
import { Product } from 'src/types/Product'
import LocalDatabase from '@databaseManager/localDatabase'
import { Database } from '@interfaces/database'

export default class GetLocalProductsCaseImpl extends GetProductsCase {
  private database: Database

  constructor() {
    super()
    this.database = new LocalDatabase()
  }

  public async getProducts(category?: string): Promise<Product[]> {
    const products = await this.database.getProducts(category)
    return products
  }
}
