import request from 'supertest'
import app from '../../../src/app'
import faker from 'faker'

describe('Order test', () => {
  it('Should create a order buy in the card', async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        option: 'card',
        clientId: faker.random.uuid(),
        amount: 36000,
        cardNumber: '6062820475891449',
        cardHolderName: 'Hiarly Fernandes de Souto',
        cardExpirationDate: '0225',
        cardCvv: '123',
        installments: 1,
        items: [
          {
            id: '1',
            product: 'VsCode',
            unitPrice: 12000,
            quantity: 3,
            tangible: false
          }
        ]
      })
    return expect(response.status).toBe(200)
  })

  it('Should create a order buy in the bank slip', async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        option: 'bank slip',
        clientId: faker.random.uuid(),
        amount: 36000,
        customer: {
          name: 'Hiarly Souto',
          country: 'br',
          cpf: '00000000000',
          email: 'hiarlyfsouto@gmail.com'
        },
        items: [
          {
            id: '1',
            product: 'VsCode',
            unitPrice: 12000,
            quantity: 3,
            tangible: false
          }
        ]
      })
    return expect(response.status).toBe(200)
  })
})
