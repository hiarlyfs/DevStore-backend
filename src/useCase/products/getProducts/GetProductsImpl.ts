import GetProducts from './GetProducts'
import { Product } from 'src/types/Product'
import { ProductsPlace } from '@utils/ProductsPlace'
import GetProductFactory from './GetProductsFactory'

export default class GetProductsImpl implements GetProducts {
  async getProducts(categoria?: string | undefined): Promise<Product[]> {
    const getDefaultProducts: GetProducts = GetProductFactory.createGetProducts(
      ProductsPlace.DEFAULT
    )

    const getOnlineProducts: GetProducts = GetProductFactory.createGetProducts(
      ProductsPlace.ONLINE
    )

    const defaultProducts = await getDefaultProducts.getProducts(categoria)
    const onlineProducts = await getOnlineProducts.getProducts(categoria)
    defaultProducts.push(...onlineProducts)
    return defaultProducts
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const productsPlace: ProductsPlace =
        id.length <= 2 ? ProductsPlace.DEFAULT : ProductsPlace.ONLINE

      const getProduct = GetProductFactory.createGetProducts(productsPlace)

      const product = await getProduct.getProductById(id)
      return product
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
