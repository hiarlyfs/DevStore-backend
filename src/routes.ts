import express from 'express'
import ProductController from '@controllers/ProductController'

const routes = express.Router()
const productController = new ProductController()

routes.get('/products', productController.getProducts)

export default routes
