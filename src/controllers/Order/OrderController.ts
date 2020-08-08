import { Request, Response } from 'express'
import { IOrderRequest } from './OrderRequest.interface'
import OrderUtilsController from './OrderUtilsController'
import Transaction from '../../useCase/transaction/Transaction'
import CardTransaction from '../../useCase/transaction/CardTransactions'

export default class OrderController {
  private orderUtils: OrderUtilsController
  private transactionManager: Transaction
  constructor() {
    this.orderUtils = new OrderUtilsController()
    this.transactionManager = new CardTransaction()
  }

  public createOrder = async (
    req: Request<{}, {}, IOrderRequest>,
    res: Response
  ) => {
    try {
      const order = this.orderUtils.serializeToOrderService(req.body)
      const transaction = await this.transactionManager.createTransaction(order)
      return res.send({ transaction })
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}
