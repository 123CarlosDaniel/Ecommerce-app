import Buscador from './Buscador'
import './productos.css'
import ProductsCards from './ProductsCards'
import { useState } from 'react'
const Productos = () => {
  const urlApi = import.meta.env.VITE_URL_API // desplegado en render
  const [url, setUrl] = useState(urlApi)

  return (
    <section>
      <h5>Nuestros productos</h5>
      <h2>Para ti y tu familia aquí tenemos los mejores productos</h2>
      <div className="products__container">
        <Buscador setUrl={setUrl}></Buscador>
        <ProductsCards url={url}></ProductsCards>
      </div>
    </section>
  )
}

export default Productos
