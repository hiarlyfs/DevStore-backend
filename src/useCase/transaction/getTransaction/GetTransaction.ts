import OnlineDatabase from '@databaseManager/onlineDatabase'
import { getTransactionById } from '@services/pagarme/transactions'
import { simulateBankSlipPayment } from '@services/pagarme/payments'
import { TransactionDatabase } from '@interfaces/database'

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
      return transaction
    } catch (error) {
      throw new Error(error)
    }
  }
}
