import GetProducts from './GetProducts'
import { Product } from '../../../types/Product'
import LocalDatabase from '@databaseManager/localDatabase'
import { ProductDatabase } from '@interfaces/database'

export default class GetDefaultProductsImpl implements GetProducts {
  private database: ProductDatabase

  constructor() {
    this.database = new LocalDatabase()
  }

  public async getProducts(category?: string): Promise<Product[]> {
    const products = await this.database.getProducts(category)

    return products.map((product) => this.serializeProduct(product))
  }

  public async getProductById(id: string): Promise<Product> {
    const product = await this.database.getProductById(id)

    return this.serializeProduct(product)
  }

  private serializeProduct = (product: Product) => {
    return {
      ...product,
      image: `${process.env.BASE_URL}/uploads/${product.image}`
    }
  }
}
