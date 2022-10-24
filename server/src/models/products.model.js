import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    public_id: String,
    secure_url: String
  }
}, {
  versionKey: false
})

productSchema.query.byCategory = function (category) {
  return this.where({ category: new RegExp(category, 'i') })
}

export default model('product', productSchema)
