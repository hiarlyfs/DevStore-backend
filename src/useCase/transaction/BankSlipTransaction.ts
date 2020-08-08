import Transaction from './Transaction'
import { IBankSlipOrderData } from '../../types/Order'
import { generateBankSlipTransaction } from '@services/pagarme/transactions'

class BankSlipTransaction extends Transaction {
  async generateTransaction<IBankSlipOrderData>(
    order: IBankSlipOrderData
  ): Promise<any> {
    const transaction = await generateBankSlipTransaction(order)
    return transaction
  }
}

export default BankSlipTransaction
