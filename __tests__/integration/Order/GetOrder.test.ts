import request from 'supertest'
import app from '../../../src/app'

interface ICreateTransactionResponse extends Response {
  id: string
}

describe('Should get orders', () => {
  it('Should get orders from a specific client', async () => {
    const response = await request(app).get('/allOrders?clientId=123')
    return expect(response.status).toBe(200)
  })

  it('Should not get orders from a specific client without the client id', async () => {
    const response = await request(app).get('/allOrders?clientId')
    return expect(response.status).toBe(400)
  })

  it('Should get a specific order', async () => {
    const transaction = await request(app)
      .post('/orders')
      .send({
        option: 'card',
        clientId: '123',
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

    const response = await request(app).get(
      `/orders?orderId=${transaction.body.transaction.id}`
    )
    return expect(response.status).toBe(200)
  })

  it('Should get a specific order', async () => {
    const response = await request(app).get('/orders?orderId')
    return expect(response.status).toBe(400)
  })
})
