import { Request, Response } from 'express'
import {
  IOrderCardRequest,
  IOrderBankSlipRequest
} from './OrderRequestInterface'
import { getTransactionOption } from '@utils/TransactionOption'
import TransactionFactory from '../../useCase/transaction/TransactionFactory'
import OrderSerializer from './OrderSerializer'

export default class OrderController {
  private orderSerializer: OrderSerializer

  constructor() {
    this.orderSerializer = new OrderSerializer()
  }

  public createOrder = async (
    req: Request<{}, {}, IOrderCardRequest | IOrderBankSlipRequest>,
    res: Response
  ) => {
    try {
      const transactionOption = getTransactionOption(req.body.option)
      const transactionManager = TransactionFactory.createTransactionManager(
        transactionOption
      )
      const orderDataSerialized = this.orderSerializer.serializeToTransactionService(
        req.body
      )
      const transaction = await transactionManager.createTransaction(
        orderDataSerialized
      )
      return res.send({ transaction })
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}
