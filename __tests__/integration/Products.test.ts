import request from 'supertest'
import app from '../../src/app'

describe('Product test', () => {
  it('Should get all the products in the database', async () => {
    const response = await request(app).get('/products?place=default')

    return expect(response.status).toBe(200)
  })
})
