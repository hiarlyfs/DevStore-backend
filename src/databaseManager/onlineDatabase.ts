import {
  saveDataInFirebase,
  getData,
  updateData
} from '@services/firebase/firebaseUtils'
import { TransactionDatabase } from '@interfaces/database'
import { IOrderSaveData } from 'src/types/Order'

export default class OnlineDatabase implements TransactionDatabase {
  async saveTransaction(clientId: string, data: IOrderSaveData): Promise<any> {
    try {
      const response = await saveDataInFirebase(
        `/clients/${clientId}/transactions/${data.transactionId}`,
        {
          amount: data.amount,
          data: data.data,
          status: data.status
        }
      )
      return response
    } catch (err) {
      throw new Error(err)
    }
  }

  async getAllTransactionsFromClient(clientId: string): Promise<any> {
    try {
      const transactions = await getData(`/clients/${clientId}/transactions`)
      return transactions
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateTransactionStatus(
    clientId: string,
    transactionId: string,
    status: string
  ): Promise<any> {
    try {
      const dataUpdate = await updateData(
        `/clients/${clientId}/transactions/${transactionId}`,
        { status }
      )
      return dataUpdate
    } catch (error) {
      throw new Error(error)
    }
  }
}
