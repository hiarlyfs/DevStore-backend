import OnlineDatabase from '@databaseManager/onlineDatabase'
import { IOrderData } from '../../../types/Order'

export default abstract class Transaction {
  private onlineDatabase: OnlineDatabase

  constructor() {
    this.onlineDatabase = new OnlineDatabase()
  }

  protected abstract generateTransaction<T extends IOrderData>(
    order: T
  ): Promise<any>

  private async saveTransaction(
    transaction: any,
    clientId: string
  ): Promise<any> {
    try {
      const response = await this.onlineDatabase.saveTransaction(clientId, {
        amount: transaction.amount,
        status: transaction.status,
        transactionId: transaction.id,
        data: new Date().toISOString()
      })

      return response
    } catch (err) {
      throw new Error(err)
    }
  }

  public async createTransaction<T extends IOrderData>(order: T): Promise<any> {
    const transaction = await this.generateTransaction(order)
    this.saveTransaction(transaction, order.clientId)
  }
}
