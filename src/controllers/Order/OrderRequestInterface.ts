import { IOrderData } from 'src/types/Order'

export interface IOrderCardRequest extends IOrderData {
  option: string
  cardNumber: string
  cardHolderName: string
  cardExpirationDate: string
  cardCvv: string
  installments: number
}

export interface IOrderBankSlipRequest extends IOrderData {
  option: string
  customer: {
    type: string
    country: string
    name: string
    documents: [{ type: string; number: string }]
  }
}
