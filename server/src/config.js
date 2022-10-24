import { config } from 'dotenv'
config()

const envs = {
  MONGODB_URI: process.env.PRODUCTS_APP_MONGODB_URI,
  MONGODB_URI_DEV: process.env.PRODUCTS_APP_MONGODB_URI_DEV,
  MONGODB_URI_TEST: process.env.PRODUCTS_APP_MONGODB_URI_TEST,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET
}
export default envs
