import knex from '../database/connection'
import { Database } from 'src/interfaces/database'
import { Product } from 'src/types/Product'

export default class LocalDatabase implements Database {
  async getProducts(category?: string): Promise<Product[]> {
    try {
      const products = category
        ? await knex('products').where('category', category)
        : await knex('products')
      return products
    } catch (err) {
      throw new Error(err)
    }
  }

  async getProductById(id: string | number): Promise<Product> {
    try {
      const product = await knex<Product>('products').where('id', id)
      return product[0]
    } catch (error) {
      throw new Error(error)
    }
  }
}
