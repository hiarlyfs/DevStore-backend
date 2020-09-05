import { firestore } from './firebaseConfig'

export async function putDataInFirestore(data: object) {
  const docRef = firestore.collection('products')

  const newData = await docRef.add(data)
  return newData
}

export async function getCollectionFromFirestore(collection: string) {
  const docRef = firestore.collection(collection)

  const elements = await docRef.get()
  return elements.docs
}

export async function getDocumentsFromFirestoreFilterbyField(
  collection: string,
  { fieldName, fieldValue }: { fieldName: string; fieldValue: string }
) {
  const docRef = firestore
    .collection(collection)
    .where(fieldName, '==', fieldValue)
  const elements = await docRef.get()
  return elements.docs
}

export async function getDocumentFromFirestoreFilterById(
  collectionName: string,
  id: string
) {
  const docRef = firestore.collection(collectionName).doc(id)

  const element = await docRef.get()
  return element
}
