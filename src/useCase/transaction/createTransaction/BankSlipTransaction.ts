import CreateTransaction from './CreateTransaction'
import { generateBankSlipTransaction } from '@services/pagarme/transactions'

class BankSlipTransaction extends CreateTransaction {
  async generateTransaction<IBankSlipOrderData>(
    order: IBankSlipOrderData
  ): Promise<any> {
    const transaction = await generateBankSlipTransaction(order)
    return transaction
  }
}

export default BankSlipTransaction
