import { Request, Response } from 'express'
import { getTransactionOption } from '@utils/TransactionOption'
import TransactionFactory from '../../useCase/transaction/createTransaction/TransactionFactory'
import {
  IOrderCardRequest,
  IOrderBankSlipRequest
} from './OrderRequestInterface'

export default class OrderController {
  public createOrder = async (
    req: Request<{}, {}, IOrderCardRequest | IOrderBankSlipRequest>,
    res: Response
  ) => {
    // TODO: validacao com o express-validator

    try {
      const transactionOption = getTransactionOption(req.body.option)
      const transactionManager = TransactionFactory.createTransactionManager(
        transactionOption
      )
      const transaction = await transactionManager.createTransaction(req.body)
      return res.send({ transaction })
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}
