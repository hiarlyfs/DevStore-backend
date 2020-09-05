/* eslint-disable indent */
import {
  saveDataInFirebase,
  getData,
  updateData
} from '@services/firebase/firebaseUtils'

import {
  getCollectionFromFirestore,
  getDocumentsFromFirestoreFilterbyField,
  getDocumentFromFirestoreFilterById
} from '@services/firebase/firestoreUtils'

import { TransactionDatabase, ProductDatabase } from '@interfaces/database'
import { IOrderSaveData } from 'src/types/Order'
import { Product } from 'src/types/Product'

export default class OnlineDatabase
  implements TransactionDatabase, ProductDatabase {
  async saveTransaction(clientId: string, data: IOrderSaveData): Promise<any> {
    try {
      const response = await saveDataInFirebase(
        `/clients/${clientId}/transactions/${data.transactionId}`,
        {
          amount: data.amount,
          data: data.data,
          status: data.status
        }
      )
      return response
    } catch (err) {
      throw new Error(err)
    }
  }

  async getAllTransactionsFromClient(clientId: string): Promise<any> {
    try {
      const transactions = await getData(`/clients/${clientId}/transactions`)
      return transactions
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateTransactionStatus(
    clientId: string,
    transactionId: string,
    status: string
  ): Promise<any> {
    try {
      const dataUpdate = await updateData(
        `/clients/${clientId}/transactions/${transactionId}`,
        { status }
      )
      return dataUpdate
    } catch (error) {
      throw new Error(error)
    }
  }

  async getProducts(categoria?: string | undefined): Promise<Product[]> {
    try {
      const products = categoria
        ? await getDocumentsFromFirestoreFilterbyField('products', {
            fieldName: 'category',
            fieldValue: categoria
          })
        : await getCollectionFromFirestore('products')
      return products.map((product) => this.formatDocumentToProduct(product))
    } catch (err) {
      console.log(err)
      throw new Error('An error cocurer trying to get products from firestore')
    }
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const product = await getDocumentFromFirestoreFilterById('products', id)
      return this.formatDocumentToProduct(product)
    } catch (err) {
      console.log(err)
      throw new Error('An error cocurer trying to get a product by id')
    }
  }

  private formatDocumentToProduct = (
    document:
      | firebase.firestore.QueryDocumentSnapshot<
          firebase.firestore.DocumentData
        >
      | firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  ) => {
    const productData = document.data()

    return {
      id: document.id,
      category: productData?.category,
      price: productData?.price,
      name: productData?.name,
      image: productData?.image
    }
  }
}
