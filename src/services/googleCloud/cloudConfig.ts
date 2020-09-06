import { Storage } from '@google-cloud/storage'
import path from 'path'

const keyFilename = path.join(__dirname, '..', '..', '..', 'key.json')

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  clientOptions: {
    keyId: process.env.GOOGLE_CLOUD_PRIVATE_KEY_ID,
    clientId: process.env.GOOGLE_CLOUD_CLIENT_ID
  },
  keyFilename
})

export function getBucket() {
  return storage.bucket(`${process.env.FIREBASE_PROJECT_ID}.appspot.com`)
}
