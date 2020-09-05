import GetProducts from './GetProducts'
import { Product } from '../../../types/Product'
import OnlineDatabase from '@databaseManager/onlineDatabase'
import { ProductDatabase } from '@interfaces/database'

export default class GetOnlineProductImpl implements GetProducts {
  private database: ProductDatabase

  constructor() {
    this.database = new OnlineDatabase()
  }

  async getProducts(categoria?: string | undefined): Promise<Product[]> {
    const products = await this.database.getProducts(categoria)
    return products
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.database.getProductById(id)
    return product
  }
}
