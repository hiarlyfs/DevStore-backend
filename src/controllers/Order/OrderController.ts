import { Request, Response } from 'express'
import { IOrderRequest } from './OrderRequest.interface'
import OrderUtilsController from './OrderUtilsController'
import { createTransaction } from '@services/pagarme/cart.transactions'

export default class OrderController {
  private orderUtils: OrderUtilsController
  constructor() {
    this.orderUtils = new OrderUtilsController()
  }

  public createOrder = async (
    req: Request<{}, {}, IOrderRequest>,
    res: Response
  ) => {
    try {
      const order = this.orderUtils.serializeToOrderService(req.body)
      const transaction = await createTransaction(order)
      return res.send({ transaction })
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}
