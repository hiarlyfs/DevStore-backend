import { Product } from '../../../types/Product'

export default interface GetProductsCase {
  getProducts(categoria?: string): Promise<Product[]>
  getProductById(id: string | number): Promise<Product>
}
