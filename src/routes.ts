import express from 'express'

import ProductController from '@controllers/Product/ProductController'

import OrderController from '@controllers/Order/OrderController'
import {
  validadeCreateOrder,
  validadeGetOrdersFromClient,
  validadeGetOrder
} from '@controllers/Order/OrderValidations'

import PaymentController from '@controllers/Payment/PaymentController'
import { validatePayOrder } from '@controllers/Payment/PaymentValidations'

const routes = express.Router()

// Instances controller
const productController = new ProductController()
const orderController = new OrderController()
const paymentController = new PaymentController()

// products routes
routes.get('/products', productController.getProducts)

// orders routes
routes.post('/orders', [validadeCreateOrder], orderController.createOrder)
routes.get('/orders', [validadeGetOrder], orderController.getOrder)
routes.get(
  '/allOrders',
  [validadeGetOrdersFromClient],
  orderController.getOrdersFromClient
)

// payments routes
routes.put('/payments', [validatePayOrder], paymentController.payOrder)

export default routes
