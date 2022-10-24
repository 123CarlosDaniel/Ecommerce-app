import mongoose from 'mongoose'
import envs from './config.js'

const { NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test' ? envs.MONGODB_URI_TEST : (NODE_ENV === 'dev' ? envs.MONGODB_URI_DEV : envs.MONGODB_URI)
// const MONGODB_URI= process.env.PRODUCTS_APP_MONGODB_URI || "mongodb://localhost/products-app"
console.log(connectionString)
const connect = async () => {
  try {
    const db = await mongoose.connect(connectionString)
    console.log(`Connected to ${db.connection.name} mode : ${NODE_ENV}`)
  } catch (err) {
    console.log(err)
  }
}
connect()

// .then( db => console.log( `Database is connected mode:`,NODE_ENV ) )
// .catch(err => console.log(err))
