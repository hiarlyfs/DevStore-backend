import { IOrderRequest } from './OrderRequest.interface'
import { ICardOrderData, IItemOrder } from '../../types/Order'

export default class OrderUtilsController {
  public serializeToOrderService(orderRequest: IOrderRequest): ICardOrderData {
    const items: IItemOrder[] = orderRequest.items.map((item) => {
      const orderSerialized = { ...item, unitPrice: item.unitPriceInCents }
      delete orderSerialized.unitPriceInCents
      return orderSerialized
    })
    return { ...orderRequest, items }
  }
}
