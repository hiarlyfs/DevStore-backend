import { Product } from '../../../types/Product'

export default interface GetProducts {
  getProducts(categoria?: string): Promise<Product[]>
  getProductById(id: string): Promise<Product>
}
