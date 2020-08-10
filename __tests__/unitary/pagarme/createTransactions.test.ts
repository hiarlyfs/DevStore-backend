import faker from 'faker'
import {
  generateCardTransaction,
  generateBankSlipTransaction
} from '../../../src/services/pagarme/transactions'

interface IResponse {
  status: string
}

describe('Trasactions in PAGARME API', () => {
  it('Should resgiter a new card transaction', async () => {
    const response: IResponse = await generateCardTransaction({
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
    return expect(response.status).toBe('paid')
  })

  it('Should register a new bank slip transaction', async () => {
    const response: IResponse = await generateBankSlipTransaction({
      amount: 3000,
      clientId: '2',
      items: [
        {
          id: '1',
          product: faker.commerce.product(),
          unitPrice: 1000,
          quantity: 3
        }
      ],
      customer: {
        name: faker.name.findName(),
        country: faker.address.countryCode().toLowerCase(),
        email: faker.internet.email(),
        cpf: '00000000000'
      }
    })
    return expect(response.status).toBe('processing')
  })
})
