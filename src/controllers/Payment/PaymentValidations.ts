import joi from '@hapi/joi'
import { NextFunction, Request, Response } from 'express'
import MiddlewareValidation from '@controllers/Utils/MiddlewareValidation'

export function validatePayOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bodySchema = joi.object({
    clientId: joi.string().required(),
    transactionId: joi.string().required()
  })
  MiddlewareValidation.validate(bodySchema, req.body, res, next)
}
