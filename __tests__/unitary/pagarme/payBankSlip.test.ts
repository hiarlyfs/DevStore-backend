import faker from 'faker'
import { generateBankSlipTransaction } from '../../../src/services/pagarme/transactions'
import { simulateBankSlipPayment } from '../../../src/services/pagarme/payments'

interface IResponse {
  status: string
}

describe('Trasactions in PAGARME API', () => {
  it('Should register a new bank slip transaction', async () => {
    const transaction = await generateBankSlipTransaction({
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
    const response: IResponse = await simulateBankSlipPayment(transaction.id)
    return expect(response.status).toBe('paid')
  })
})
