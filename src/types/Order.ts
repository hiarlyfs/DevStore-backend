export type IItemOrder = {
  id: string
  product: string
  // Unit price = product's in cents
  unitPrice: number
  quantity: number
}

export type IOrderData = {
  clientId: string
  items: IItemOrder[]
  amountInCents: number
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
    type: string
    country: string
    name: string
    documents: [{ type: string; number: string }]
  }
}
