import { getBucket } from './cloudConfig'
import { Express } from 'express'

export function uploadImage(image: Express.Multer.File) {
  const bucket = getBucket()
  const blob = bucket.file(image.filename)
  const blobStream = blob.createWriteStream()

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`

  blobStream.on('finish', () => {
    console.log(`New image saved in: ${publicUrl}`)
  })

  blobStream.end(image.buffer)
  return publicUrl
}
