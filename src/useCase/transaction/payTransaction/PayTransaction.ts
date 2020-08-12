import { simulateBankSlipPayment } from '@services/pagarme/payments'
import { TransactionDatabase } from '@interfaces/database'
import OnlineDatabase from '@databaseManager/onlineDatabase'

export default class PayTransaction {
  private onlineDatabase: TransactionDatabase

  constructor() {
    this.onlineDatabase = new OnlineDatabase()
  }

  public async payBankSlip(
    clientId: string,
    transactionId: string
  ): Promise<any> {
    try {
      const transactionPay = await simulateBankSlipPayment(transactionId)
      const transactionStatusUpdate = await this.onlineDatabase.updateTransactionStatus(
        clientId,
        transactionId,
        transactionPay.status
      )
      return transactionStatusUpdate
    } catch (err) {
      throw new Error(err)
    }
  }
}
