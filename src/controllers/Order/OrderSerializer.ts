import {
  IOrderCardRequest,
  IOrderBankSlipRequest
} from './OrderRequestInterface'
import { ICardOrderData, IBankSlipOrderData } from 'src/types/Order'

export default class OrderSerializer {
  public serializeToTransactionService(
    data: IOrderCardRequest | IOrderBankSlipRequest
  ): ICardOrderData | IBankSlipOrderData {
    if (data.option === 'card') {
      return this.serializeToCardTransaction(data as IOrderCardRequest)
    }
    return this.serialzeToBankTransaction(data as IOrderBankSlipRequest)
  }

  private serializeToCardTransaction(data: IOrderCardRequest): ICardOrderData {
    return { ...data }
  }

  private serialzeToBankTransaction(
    data: IOrderBankSlipRequest
  ): IBankSlipOrderData {
    return { ...data }
  }
}
