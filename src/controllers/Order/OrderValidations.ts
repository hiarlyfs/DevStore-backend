import joi from '@hapi/joi'
import { NextFunction, Request, Response } from 'express'
import MiddlewareValidation from '@controllers/Utils/MiddlewareValidation'

export function validadeCreateOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bodySchema = joi.object({
    clientId: joi.string().required(),
    option: joi.string().required(),
    amount: joi.number().required()
  })
  MiddlewareValidation.validate(bodySchema, req.body, res, next)
}

export function validadeGetOrdersFromClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const querySchema = joi.object({
    clientId: joi.string().required()
  })
  MiddlewareValidation.validate(querySchema, req.query, res, next, false)
}

export function validadeGetOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const querySchema = joi.object({
    orderId: joi.string().required().not('undefined')
  })
  MiddlewareValidation.validate(querySchema, req.query, res, next, false)
}
