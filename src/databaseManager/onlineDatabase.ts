import { saveDataInFirebase } from '@services/firebase/firebaseUtils'
import { TransactionDatabase } from '@interfaces/database'
import { IOrderSaveData } from 'src/types/Order'

export default class OnlineDatabase implements TransactionDatabase {
  async saveTransaction(clientId: string, data: IOrderSaveData): Promise<any> {
    try {
      const response = await saveDataInFirebase(
        `/clients/${clientId}/transactions`,
        data
      )
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
