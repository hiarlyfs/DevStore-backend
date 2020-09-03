import { Storage } from '@google-cloud/storage'
import path from 'path'

const keyFilename = path.join(__dirname, '..', '..', '..', 'key.json')

const storage = new Storage({
  keyFilename
})

export function getBucket() {
  console.log(process.env.FIREBASE_PROJECT_ID)
  return storage.bucket(`${process.env.FIREBASE_PROJECT_ID}.appspot.com`)
}
