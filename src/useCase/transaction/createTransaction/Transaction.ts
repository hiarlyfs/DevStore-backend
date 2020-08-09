import { IOrderData } from '../../../types/Order'

export default abstract class Transaction {
  protected abstract generateTransaction<T extends IOrderData>(
    order: T
  ): Promise<any>

  private saveTransaction(transaction: any): void {
    // TODO: codigo que salva uma transação
    // no firebase. Salva o id do cliente e o id da compra
  }

  public async createTransaction<T extends IOrderData>(order: T): Promise<any> {
    const transaction = await this.generateTransaction(order)
    this.saveTransaction(transaction)
  }
}
