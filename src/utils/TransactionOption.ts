export enum TransactionOption {
  CARD = 'card',
  BANK_SLIP = 'bank_slip'
}

export function getTransactionOption(option: string) {
  switch (option) {
    case 'card':
      return TransactionOption.CARD
    case 'bank slip':
      return TransactionOption.BANK_SLIP
    default:
      throw new Error(
        'Invalid transaction option. It can only be "card" and "bank slip"'
      )
  }
}
