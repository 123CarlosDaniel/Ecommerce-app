import fideo from '../../assets/fideos.jpg'
import cookie from '../../assets/cookies.jpg'
import yogur from '../../assets/yogur.jpg'
import paneton from '../../assets/paneton.jpg'
import PropTypes from 'prop-types'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

const ProductsExtra = () => {
  return (
    <Swiper className="card__container container"
      spaceBetween={40}
      modules={[Pagination]}
      slidesPerView={2}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><Product img={fideo} title={'Fideos'}></Product></SwiperSlide>
      <SwiperSlide><Product img={cookie} title={'Cookies'}></Product></SwiperSlide>
      <SwiperSlide><Product img={yogur} title={'Yogur'}></Product> </SwiperSlide>
      <SwiperSlide><Product img={paneton} title={'Panetón'}></Product></SwiperSlide>
    </Swiper>
  )
}

const Product = (props) => {
  return (
    <div className="card__image card-extra">
        <img src={props.img} />
        <div className="card-description">
          <Link to={'/productos'}>{props.title}</Link>
        </div>
    </div>
  )
}
Product.displayName = 'Product'
Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
export default ProductsExtra
