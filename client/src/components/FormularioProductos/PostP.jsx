import { Field, Formik, Form } from 'formik'
import axios from 'axios'
import './PostP.css'
import { useState } from 'react'
import Loader from '../Loader/Loader'
const urlApi = import.meta.env.VITE_URL_API // desplegado en heroku

const Message = () => {
  return (
    <div className="message">
      <h2>Producto agregado</h2>
    </div>
  )
}

const PostP = () => {
  const [send, setSend] = useState(false)
  const [isloading, setIsloading] = useState(false)
  const productos = {
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  }
  const postData = async (data) => {
    // const url = "http://localhost:4000/api";
    const url = urlApi
    setIsloading(true)
    const form = new FormData()
    for (const key in data) {
      form.append(key, data[key])
    }
    // console.log(form)
    return await axios.post(url, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  return (
    <section>
      <h5>Sección del administrador</h5>
      <h2>Aquí podrás agregar nuevos productos</h2>
      <Formik
        initialValues={productos}
        onSubmit={async (values, actions) => {
          try {
            await postData(values)
            setIsloading(false)
            setSend(true)
            actions.resetForm()
          } catch (error) {
            console.log(error)
          }
          setTimeout(() => {
            setSend(false)
          }, 2000)
        }}
      >
        {({ setFieldValue, isSubmitting, handleSubmit }) => (
          <>
           <Form onSubmit={handleSubmit} className="formulario" >
          <label htmlFor="title">
          <span>Título</span>
          <Field
            required
            placeholder="Ingrese el titulo del producto"
            name="title"
            onChange={(e) => { setFieldValue('title', e.target.value) }}
          />
        </label>
        <label htmlFor="price">
          <span>Precio</span>
          <Field
            required
            placeholder="Ingrese el precio del producto sin ningun simbolo"
            name="price"
            onChange={(e) => { setFieldValue('price', e.target.value) }}
          />
        </label>
        <label htmlFor="description">
          <span>Descripción</span>
          <Field
            required
            placeholder="Añada una descripcion del producto"
            name="description"
            onChange={(e) => { setFieldValue('description', e.target.value) }}
          />
        </label>
        <label htmlFor="category">
          <span>Categoría</span>
          <select required className='product__select' name="category" onChange={(e) => { setFieldValue('category', e.target.value) }}>
            <option value="">Select a category</option>
            <option value="alimentos">Alimentos</option>
            <option value="confites">Confites</option>
            <option value="mascotas">Mascotas</option>
            <option value="panetones">Panetones</option>
          </select>
        </label>
        <label htmlFor="image">
          <span>Imagen</span>
          <input
            required
            type="file"
            name="image"
            onChange={e => setFieldValue('image', e.target.files[0])}
          />
        </label>
        <input type="submit" className=" btn-mini" />
        {isloading && <Loader/>}
          </Form>
          </>
        ) }
      </Formik>
      {send ? <Message /> : null}
    </section>
  )
}

export default PostP
