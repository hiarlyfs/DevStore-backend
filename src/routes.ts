import express from 'express'
import ProductController from '@controllers/ProductController'

import LocalDatabase from '@databaseManager/localDatabase'

const routes = express.Router()
const productController = new ProductController(new LocalDatabase())

routes.get('/products', productController.getProducts)

export default routes
