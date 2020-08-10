import { firebaseDatabase } from './firebaseConfig'

export async function saveDataInFirebase(
  ref: string,
  data: object
): Promise<any> {
  try {
    const response = await firebaseDatabase.ref(ref).push(data)
    return response
  } catch (err) {
    throw new Error(err)
  }
}
