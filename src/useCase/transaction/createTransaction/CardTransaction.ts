import CreateTransaction from './CreateTransaction'
import { generateCardTransaction } from '@services/pagarme/transactions'

export default class CardTransaction extends CreateTransaction {
  async generateTransaction<ICardOrderData>(order: ICardOrderData) {
    const transaction = await generateCardTransaction(order)
    return transaction
  }
}
