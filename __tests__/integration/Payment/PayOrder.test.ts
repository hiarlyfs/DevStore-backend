import request from 'supertest'
import app from '../../../src/app'

describe('Pay bank slip', () => {
  it('Should be possible simulate the payment of a bank slip', async () => {
    const bankSlip = await request(app)
      .post('/orders')
      .send({
        option: 'bank slip',
        clientId: '123',
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

    const response = await request(app)
      .put('/payments')
      .send({
        transactionId: String(bankSlip.body.transaction.id),
        clientId: '123'
      })

    return expect(response.body.transaction.status).toBe('paid')
  })

  it('Should not pay a bank slip without the transaction id', async () => {
    const response = await request(app).put('/payments').send({
      clientId: '123'
    })

    return expect(response.status).toBe(400)
  })

  it('Should not pay a bank slip without the client id', async () => {
    const response = await request(app).put('/payments').send({
      transactionId: '123123434'
    })

    return expect(response.status).toBe(400)
  })
})
