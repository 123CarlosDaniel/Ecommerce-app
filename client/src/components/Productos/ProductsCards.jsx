import CardImage from './CardImage'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'
const ProductsCards = (props) => {
  const [products, setProducts] = useState([])
  const { url } = props
  useEffect(() => {
    axios.get(url).then(res => {
      setProducts(res.data.data)
    })
    return () => {
      console.log('cleanup')
    }
  }, [url])

  return (
    <div className="products__cards">
          {products?.map((producto) => (
            <CardImage
              key={producto._id}
              imagen={producto.image.secure_url}
              title={producto.title}
              description={producto.description}
              price={producto.price}
            ></CardImage>
          ))}
        </div>
  )
}

export default ProductsCards

ProductsCards.propTypes = {
  url: PropTypes.string
}
