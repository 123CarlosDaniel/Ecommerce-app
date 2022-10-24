import Product from '../models/products.model.js'
import { uploadImage, deleteImage, updateImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    if (!products) {
      return res.status(404).send('No products found')
    }
    if (products.length === 0) {
      return res.status(200).send({
        message: 'Products list empty'
      })
    }
    if (req.query.category) {
      const { category } = req.query
      const productsWithCategory = products.filter(product => product.category === category)
      if (productsWithCategory.length === 0) {
        return res.status(200).send({
          message: `Products with category ${category} is empty`
        })
      }
      return res.status(200).json({
        data: productsWithCategory,
        message: `Products with category ${category}`
      })
    }
    res.status(200).json({
      data: products,
      message: 'Products fetched successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const createProduct = async (req, res) => {
  try {
    const { title, price, description, category } = req.body
    if (!title || !price || !description || !category) {
      const err = new Error()
      err.message = 'Missing fields'
      err.status = 400
      throw err
    }
    const product = await new Product(req.body)
    const productRepited = await Product.findOne({
      title
    })
    if (productRepited) {
      const err = new Error()
      err.message = 'Product title already exists'
      err.status = 400
      throw err
    }
    const result = await uploadImage(req.files.image.tempFilePath)
    product.image = {
      public_id: result.public_id,
      secure_url: result.secure_url
    }
    const data = await product.save()
    await fs.unlink(req.files.image.tempFilePath)
    return res.status(201).json({
      message: 'Product saved',
      data
    })
  } catch (error) {
    await fs.unlink(req.files.image.tempFilePath)
    if (error.status) {
      return res.status(error.status).json({
        message: error.message
      })
    }
    res.status(500).json({
      message: error.message
    })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id)
    if (!product) {
      return res.status(404).send('Product not found')
    }
    if (product.image.public_id) {
      await deleteImage(product.image.public_id)
    }
    res.status(202).json({
      message: 'Product removed'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params

    const productFounded = await Product.findById(id)
    if (!productFounded) {
      return res.status(404).send('Product not found')
    }
    const product = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category
    }
    if (req.files?.image) {
      const result = await updateImage(
        productFounded.image.public_id,
        req.files.image.tempFilePath
      )
      product.image = {
        secure_url: result.secure_url,
        public_id: result.public_id
      }
      await fs.unlink(req.files.image.tempFilePath)
    }
    const productSaved = await Product.findByIdAndUpdate(
      id,
      {
        $set: product
      },
      {
        new: true
      }
    )

    res.status(202).json({
      message: 'Product updated',
      data: productSaved
    })
  } catch (error) {
    await fs.unlink(req.files.image.tempFilePath)
    res.status(500).json({
      message: error.message
    })
  }
}
