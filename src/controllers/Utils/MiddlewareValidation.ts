import { Response, NextFunction } from 'express'
import { ObjectSchema } from '@hapi/joi'

export default class MiddlewareValidation {
  public static validate(
    schemaValidation: ObjectSchema<any>,
    dataToBeValidate: any,
    res: Response,
    nextFunction: NextFunction,
    allowUnknown = true
  ) {
    const { error } = schemaValidation.validate(dataToBeValidate, {
      allowUnknown
    })
    if (error) {
      return res.status(400).send({ error: error.details })
    } else {
      nextFunction()
    }
  }
}
