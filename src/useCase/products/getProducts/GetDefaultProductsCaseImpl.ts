import GetProductsCase from './GetProductsCase'
import { Product } from 'src/types/Product'
import LocalDatabase from '@databaseManager/localDatabase'
import { Database } from '@interfaces/database'

export default class GetDefaultProductsCaseImpl implements GetProductsCase {
  private database: Database

  constructor() {
    this.database = new LocalDatabase()
  }

  public async getProducts(category?: string): Promise<Product[]> {
    const products = await this.database.getProducts(category)
    return products
  }

  public async getProductById(id: string | number): Promise<Product> {
    const product = await this.database.getProductById(id)
    return product
  }
}
