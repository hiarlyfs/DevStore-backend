import { firebaseDatabase, firestore } from './firebaseConfig'

export async function saveDataInFirebase(
  ref: string,
  data: object
): Promise<any> {
  try {
    const response = await firebaseDatabase.ref(ref).set(data)
    return response
  } catch (err) {
    throw new Error(err)
  }
}

export async function updateData(ref: string, newValue: any) {
  try {
    const response = await firebaseDatabase.ref(ref).update(newValue)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export async function getData(ref: string) {
  try {
    const response = await firebaseDatabase.ref(ref).once('value')
    return response.val()
  } catch (error) {
    throw new Error(error)
  }
}

export async function putDataInFirestore(data: object) {
  const docRef = firestore.collection('products')

  const newData = await docRef.add(data)
  return newData
}
