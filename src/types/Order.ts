export type IItemOrder = {
  id: string
  product: string
  // Unit price = product's in cents
  unitPrice: number
  quantity: number
  tagible: boolean
}

export type IOrderData = {
  clientId: string
  items: IItemOrder[]
  amount: number
}

export interface ICardOrderData extends IOrderData {
  cardNumber: string
  cardHolderName: string
  cardExpirationDate: string
  cardCvv: string
  installments: number
}

export interface IBankSlipOrderData extends IOrderData {
  customer: {
    country: string
    name: string
    email: string
    cpf: string
  }
}

export interface IOrderSaveData {
  amount: number
  status: string
  transactionId: string
  data: string
}
