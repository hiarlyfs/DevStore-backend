import request from 'supertest'
import app from '../../src/app'

describe('Product test', () => {
  it('Should get all the products in the database', async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        option: 'card',
        clientId: '123456',
        amountInCents: 36000,
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
})
