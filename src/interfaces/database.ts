import { Product } from '../types/Product'

export interface Database {
  getProducts(categoria?: string): Promise<Product[]>
  getProductById(id: string | number): Promise<Product>
}
