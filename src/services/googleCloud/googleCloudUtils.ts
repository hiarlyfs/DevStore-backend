import { getBucket } from './cloudConfig'
import { Express } from 'express'

export function uploadImage(image: Express.Multer.File) {
  const bucket = getBucket()
  const blob = bucket.file(image.originalname)
  const blobStream = blob.createWriteStream()

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`

  blobStream.on('finish', () => {
    // The public URL can be used to directly access the file via HTTP.
  })

  blobStream.end(image.buffer)
  return publicUrl
}
