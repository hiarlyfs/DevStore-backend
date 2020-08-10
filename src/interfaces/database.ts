import { Product } from '../types/Product'

export interface ProductDatabase {
  getProducts(categoria?: string): Promise<Product[]>
  getProductById(id: string | number): Promise<Product>
}

export interface TransactionDatabase {
  saveTransaction(transactionId: string, clientId: string): Promise<any>
  getTransactionById(transactionId: string): Promise<any>
  getAllTransactionsFromClient(clientId: string): Promise<any>
}

// TODO: Metodos que permitem a criação de um produto
// TODO: Metodos que permite a edição/exclusão de um produto
export interface AdminDatabase {}
