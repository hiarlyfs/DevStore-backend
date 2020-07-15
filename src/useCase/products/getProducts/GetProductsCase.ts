import { Product } from '../../../types/Product'

export default abstract class GetProductsCase {
  public abstract getProducts(categoria?: string): Promise<Product[]>
}
