import { Router } from 'express'
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/products.controller.js'
import { validateImage, validateData } from '../middlewares/product.middleware.js'
import fileUpload from 'express-fileupload'

const upload = fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
})
const mostrar = (req, res, next) => {
  console.log(req.body)
  next()
}

const router = Router()

router.get('/', getProducts)

router.post('/', mostrar, upload, validateImage, createProduct)

router.delete('/:id', deleteProduct)

router.put('/:id', upload, validateData, updateProduct)

export default router
