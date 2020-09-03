import AdminDatabase from '../../../databaseManager/adminDatabase'
import { Product } from '../../../types/Product'
import { IAdminDatabase } from '../../../interfaces/database'

interface INewProduct {
  name: string
  price: number
  category: string
  image: Express.Multer.File
}

export default class AddProduct {
  addNewProduct = async (data: INewProduct): Promise<Product> => {
    try {
      const adminDatabase = new AdminDatabase()
      const publicUrl = adminDatabase.uploadProductImage(data.image)
      const productSaved = await adminDatabase.saveNewProductData({
        ...data,
        image: publicUrl
      })
      return productSaved
    } catch (err) {
      throw new Error('An error occurred trying to add a new Product')
    }
  }
}
