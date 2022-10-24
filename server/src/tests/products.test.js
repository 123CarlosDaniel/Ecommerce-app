import mongoose from 'mongoose'
import supertest from 'supertest'
import app, { server } from '../index.js'
import Product from '../models/products.model.js'
const { connection } = mongoose
const api = supertest(app)

/* global describe, expect,test,afterAll,beforeEach */
/* eslint no-undef: "error" */

describe('Products', () => {
  describe.skip('GET /api', () => {
    beforeEach(async () => {
      const product = {
        title: 'test',
        price: 1,
        description: 'test',
        category: 'lacteos',
        image: {
          public_id: 'test',
          secure_url: 'test'
        }
      }
      await Product.deleteMany({})
      await new Product(product).save()
    })

    test('should return 200 if no products', async () => {
      await Product.deleteMany({})
      const response = await api.get('/api')
      expect(response.status).toBe(200)
    })

    test('data should return 200 if products', async () => {
      const response = await api.get('/api').expect('Content-Type', /application\/json/)
      expect(response.status).toBe(200)
      expect(response.body.data.length).toBe(1)
    })
  })

  describe('POST /api', () => {
    test('should return 400 if no title', async () => {
      const response = await api.post('/api').send({
        price: 1,
        description: 'test',
        category: 'lacteos',
        img: {
          public_id: 'test',
          secure_url: 'test'
        }
      }).expect(400)
      expect(response.status).toBe(400)
    })

    test('should return 400 if there is no image', async () => {
      await api.post('/api').send({
        title: 'test',
        price: 1,
        description: 'test',
        category: 'lacteos',
        image: {
          public_id: 'test',
          secure_url: 'test'
        }
      }).expect(400)
      await Product.deleteMany({})
    })
  })

  // describe('POST /api sending image', () => {
  //   test()
  // })

  describe.skip('DELETE /api/:id', () => {
    test('should return 404 if product no exits', async () => {
      const response = await api.delete('/api/1').expect(404)
      expect(response.status).toBe(404)
    })

    test('should return 200 if product exits', async () => {
      const product2 = {
        title: 'test',
        price: 1,
        description: 'test',
        category: 'lacteos',
        image: {
          public_id: 'test',
          secure_url: 'test'
        }
      }
      const product = await new Product(product2).save()
      await api.delete(`/api/${product._id}`).expect(200)
    })
  })

  afterAll(() => {
    server.close()
    connection.close()
  })
})
