/* eslint-disable camelcase */
import { v2 as cloudinary } from 'cloudinary'
import envs from '../config.js'
const { NODE_ENV } = process.env

const target = NODE_ENV === 'test' ? 'products-test' : (NODE_ENV === 'dev' ? 'products-dev' : 'products')
cloudinary.config({
  cloud_name: envs.CLOUD_NAME,
  api_key: envs.API_KEY,
  api_secret: envs.API_SECRET
})

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: target
  })
}

export const deleteImage = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id)
}

export const updateImage = async (public_id, filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    public_id
  })
}
