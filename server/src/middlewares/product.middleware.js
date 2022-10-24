import fs from 'fs-extra'

export const validateImage = async (req, res, next) => {
  try {
    if (
      !/multipart\/form-data/.test(req.headers['content-type']) ||
      !req.files?.image
    ) {
      const err = new Error()
      err.message = 'Invalid file type or missing file'
      err.status = 400
      throw err
    }
    if (req.files.image.mimetype.includes('image')) {
      return next()
    }
    const err = new Error()
    err.message = 'Only images are allowed'
    err.status = 400
    throw err
  } catch (error) {
    if (req.files?.image) await fs.unlink(req.files.image.tempFilePath)
    res.status(error.status).json({ message: error.message })
  }
}

export const validateData = async (req, res, next) => {
  try {
    if (
      !/multipart\/form-data/.test(req.headers['content-type'])
    ) {
      const err = new Error()
      err.message = 'Invalid file type or missing file'
      err.status = 400
      throw err
    }
    if (req.files?.image) {
      if (req.files.image.mimetype.includes('image')) {
        return next()
      }
      const err = new Error()
      err.message = 'Only images are allowed'
      err.status = 400
      throw err
    }
    next()
  } catch (error) {
    if (req.files?.image) await fs.unlink(req.files.image.tempFilePath)
    res.status(error.status).json({ message: error.message })
  }
}
