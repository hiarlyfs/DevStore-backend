export type IItemOrder = {
  id: string
  product: string
  // Unit price = product's in cents
  unitPrice: number
  quantity: number
}

export type IOrder = {
  amountInCents: number
  cardNumber: string
  cardHolderName: string
  cardExpirationDate: string
  cardCvv: string
  installments: number
  items: IItemOrder[]
}
