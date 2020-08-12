import { Request, Response } from 'express'
import { IPayBankSlipBody } from './PaymentRequestInterface'
import PayTransaction from '@useCase/transaction/payTransaction/PayTransaction'

export default class PaymentController {
  private payTransaction: PayTransaction

  constructor() {
    this.payTransaction = new PayTransaction()
  }

  public payOrder = async (
    req: Request<{}, {}, IPayBankSlipBody>,
    res: Response
  ) => {
    const { transactionId, clientId } = req.body
    try {
      const transaction = await this.payTransaction.payBankSlip(
        clientId,
        transactionId
      )
      return res.send({ transaction })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'An error occurred' })
    }
  }
}
