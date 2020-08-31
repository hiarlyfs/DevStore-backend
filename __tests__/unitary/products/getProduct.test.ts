import GetProducts from '../../../src/useCase/products/getProducts/GetProductsImpl'

describe('Test the ability to the product by id', () => {
  it('Should be possible get a local product by id', async () => {
    const getProducts = new GetProducts()
    const product = await getProducts.getProductById('2')

    return expect(product).toBeDefined
  })
})
