import { saveDataInFirebase } from '@services/firebase/firebaseUtils'
import { TransactionDatabase } from '@interfaces/database'

export default class OnlineDatabase implements TransactionDatabase {
  async saveTransaction(transactionId: string, clientId: string): Promise<any> {
    try {
      const response = await saveDataInFirebase('/transactions', {
        transactionId,
        clientId
      })
      return response
    } catch (err) {
      throw new Error(err)
    }
  }

  getTransactionById(transactionId: string): Promise<any> {
    // TODO: Method not implemented yet
    throw new Error('Method not implemented.')
  }

  getAllTransactionsFromClient(clientId: string): Promise<any> {
    // TODO: Method not implemented yet
    throw new Error('Method not implemented.')
  }
}
