import express from 'express'
import ProductController from '@controllers/Product/ProductController'

import OrderController from '@controllers/Order/OrderController'
import { validadeCreateOrder } from '@controllers/Order/OrderValidations'

const routes = express.Router()
const productController = new ProductController()
const orderController = new OrderController()

routes.get('/products', productController.getProducts)
routes.post('/orders', validadeCreateOrder, orderController.createOrder)

export default routes
