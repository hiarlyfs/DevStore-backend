import { TransactionOption } from '@utils/TransactionOption'
import CreateTransaction from './CreateTransaction'
import CardTransaction from './CardTransaction'
import BankSlipTransaction from './BankSlipTransaction'

export default class TransactionFactory {
  public static createTransactionManager(
    transactionOption: TransactionOption
  ): CreateTransaction {
    switch (transactionOption) {
      case TransactionOption.CARD:
        return new CardTransaction()
      case TransactionOption.BANK_SLIP:
        return new BankSlipTransaction()
      default:
        throw new Error(
          'Invalid transaction option. It can only be "card" and "bank slip"'
        )
    }
  }
}
