export interface IItemOrderRequest {
  id: string
  product: string
  unitPriceInCents: number
  quantity: number
}

export interface IOrderRequest {
  clientId: string
  amountInCents: number
  cardNumber: string
  cardHolderName: string
  cardExpirationDate: string
  cardCvv: string
  installments: number
  items: IItemOrderRequest[]
}
