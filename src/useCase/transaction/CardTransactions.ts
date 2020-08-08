import Transaction from './Transaction'
import { ICardOrderData } from '../../types/Order'
import { generateCardTransaction } from '@services/pagarme/transactions'

export default class CardTransaction extends Transaction {
  async generateTransaction<ICardOrderData>(order: ICardOrderData) {
    const transaction = await generateCardTransaction(order)
    return transaction
  }
}
