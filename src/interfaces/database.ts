import { Product, IAddProduct } from '../types/Product'
import { IOrderSaveData } from 'src/types/Order'
import { Express } from 'express'

export interface ProductDatabase {
  getProducts(categoria?: string): Promise<Product[]>
  getProductById(id: string): Promise<Product>
}

export interface TransactionDatabase {
  saveTransaction(clientId: string, data: IOrderSaveData): Promise<any>
  getAllTransactionsFromClient(clientId: string): Promise<any>
  updateTransactionStatus(
    clientId: string,
    transactionId: string,
    status: string
  ): Promise<any>
}

export interface IAdminDatabase {
  uploadProductImage(image: Express.Multer.File): string
  saveNewProductData(data: IAddProduct): Promise<Product>
}
