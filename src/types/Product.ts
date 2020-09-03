export type Product = {
  id: string
  name: string
  image: string
  category: string
  price: number
}

export interface IAddProduct {
  name: string
  price: number
  category: string
  image: string
}
