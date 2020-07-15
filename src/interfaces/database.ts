import { Product } from 'src/types/Product'

export interface Database {
  getProducts(categoria?: string): Promise<Product[]>
}
