import { IOrderData } from '../../types/Order'

export default abstract class Transaction {
  protected abstract generateTransaction<T extends IOrderData>(
    order: T
  ): Promise<any>

  private saveTransaction(transaction: any): void {
    console.log(transaction.id)
  }

  public async createTransaction<T extends IOrderData>(order: T): Promise<any> {
    const transaction = await this.generateTransaction(order)
    this.saveTransaction(transaction)
  }
}
