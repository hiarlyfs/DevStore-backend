import express from 'express'
import ProductController from '@controllers/ProductController'
import OrderController from '@controllers/Order/OrderController'

const routes = express.Router()
const productController = new ProductController()
const orderController = new OrderController()

routes.get('/products', productController.getProducts)
routes.post('/orders', orderController.createOrder)

export default routes
