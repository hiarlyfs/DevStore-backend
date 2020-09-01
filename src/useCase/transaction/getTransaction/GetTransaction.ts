import OnlineDatabase from '@databaseManager/onlineDatabase'
import { getTransactionById } from '@services/pagarme/transactions'
import { simulateBankSlipPayment } from '@services/pagarme/payments'
import { TransactionDatabase } from '@interfaces/database'
import GetProducts from '../../products/getProducts/GetProducts'
import GetProductsImpl from '../../products/getProducts/GetProductsImpl'
import { Product } from '../../../types/Product'

export default class GetTransaction {
  private onlineDatabase: TransactionDatabase

  constructor() {
    this.onlineDatabase = new OnlineDatabase()
  }

  public async getTransactionsFromClient(clientId: string): Promise<any> {
    try {
      const transactions = await this.onlineDatabase.getAllTransactionsFromClient(
        clientId
      )
      return transactions
    } catch (err) {
      throw new Error(err)
    }
  }

  public async getTransactionById(transactionId: string): Promise<any> {
    try {
      const transaction = await getTransactionById(transactionId)

      const itemsTransaction = await this.getAllProductsFromDatabase(
        transaction.items
      )

      return { ...transaction, items: itemsTransaction }
    } catch (error) {
      throw new Error(error)
    }
  }

  private async getAllProductsFromDatabase(products: Product[]): Promise<any> {
    try {
      const getProducts: GetProducts = new GetProductsImpl()

      const databaseProducts = []

      for (const product of products) {
        const prod = await getProducts.getProductById(product.id)
        databaseProducts.push({
          ...product,
          category: prod.category,
          image: prod.image
        })
      }

      return databaseProducts
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
