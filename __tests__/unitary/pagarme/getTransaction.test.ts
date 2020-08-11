import faker from 'faker'
import {
  generateCardTransaction,
  getTransactionById
} from '../../../src/services/pagarme/transactions'

interface IResponse {
  status: string
}

describe('Trasactions in PAGARME API', () => {
  it('Should get a transaction', async () => {
    const transaction = await generateCardTransaction({
      amount: 600,
      cardNumber: '5223789901441707',
      cardHolderName: faker.name.findName(),
      cardExpirationDate: '0125',
      cardCvv: '487',
      installments: 3,
      items: [
        {
          id: '1',
          product: faker.commerce.product(),
          unitPrice: 600,
          quantity: 1
        }
      ]
    })
    const response = await getTransactionById(transaction.id)
    return expect(response.status).toBe('paid')
  })
})
