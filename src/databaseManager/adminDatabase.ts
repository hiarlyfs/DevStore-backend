import { IAdminDatabase } from '../interfaces/database'
import { IAddProduct, Product } from '../types/Product'
import { uploadImage } from '../services/googleCloud/googleCloudUtils'
import { putDataInFirestore } from '../services/firebase/firestoreUtils'

export default class AdminDatabase implements IAdminDatabase {
  uploadProductImage(image: Express.Multer.File): string {
    const publicUrl = uploadImage(image)
    return publicUrl
  }

  async saveNewProductData(data: IAddProduct): Promise<Product> {
    try {
      const newData = await putDataInFirestore(data)
      return { ...data, id: newData.id }
    } catch (err) {
      console.log(err)
      throw new Error('An error trying to save the product in firebase')
    }
  }
}
