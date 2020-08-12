import { ICardOrderData, IBankSlipOrderData } from 'src/types/Order'

export interface IOrderCardRequest extends ICardOrderData {
  option: string
}

export interface IOrderBankSlipRequest extends IBankSlipOrderData {
  option: string
}

export interface IGetClientOrdersQueryRequest {
  clientId: string
}

export interface IGetOrderQueryRequest {
  orderId: string
}
