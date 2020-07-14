import { Product } from 'src/types/Product'

export interface Database {
  getProducts(): Promise<Product[]>
}
