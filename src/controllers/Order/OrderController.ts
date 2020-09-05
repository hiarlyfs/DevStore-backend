import { Request, Response } from 'express'
import { getTransactionOption } from '@utils/TransactionOption'

import CreateTransactionFactory from '@useCase/transaction/createTransaction/CreateTransactionFactory'
import GetTransaction from '@useCase/transaction/getTransaction/GetTransaction'

import {
  IOrderCardRequest,
  IOrderBankSlipRequest,
  IGetClientOrdersQueryRequest,
  IGetOrderQueryRequest
} from './OrderRequestInterface'

export default class OrderController {
  public createOrder = async (
    req: Request<{}, {}, IOrderCardRequest | IOrderBankSlipRequest>,
    res: Response
  ) => {
    try {
      const transactionOption = getTransactionOption(req.body.option)
      const transactionManager = CreateTransactionFactory.createTransactionManager(
        transactionOption
      )
      const transaction = await transactionManager.createTransaction(req.body)
      return res.send({ transaction })
    } catch (error) {
      console.log(error)
      return res.status(400).send(error)
    }
  }

  public getOrdersFromClient = async (
    req: Request<{}, any, any, IGetClientOrdersQueryRequest>,
    res: Response
  ) => {
    const { clientId } = req.query
    try {
      const getTransaction = new GetTransaction()
      const transactions = await getTransaction.getTransactionsFromClient(
        clientId
      )

      return res.send({ transactions, clientId })
    } catch (err) {
      return res.status(400).send({ err })
    }
  }

  public getOrder = async (
    req: Request<{}, any, any, IGetOrderQueryRequest>,
    res: Response
  ) => {
    const { orderId } = req.query
    try {
      const getTransaction = new GetTransaction()
      const transaction = await getTransaction.getTransactionById(orderId)
      return res.send({ transaction })
    } catch (err) {
      return res.status(400).send({ err })
    }
  }
}
