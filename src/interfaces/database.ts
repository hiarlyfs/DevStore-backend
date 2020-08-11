import { Product } from '../types/Product'
import { IOrderSaveData } from 'src/types/Order'

export interface ProductDatabase {
  getProducts(categoria?: string): Promise<Product[]>
  getProductById(id: string | number): Promise<Product>
}

export interface TransactionDatabase {
  saveTransaction(clientId: string, data: IOrderSaveData): Promise<any>
  getTransactionById(transactionId: string): Promise<any>
  getAllTransactionsFromClient(clientId: string): Promise<any>
}

// TODO: Metodos que permitem a criação de um produto
// TODO: Metodos que permite a edição/exclusão de um produto
export interface AdminDatabase {}
