import fideo from '../../assets/fideos.jpg'
import cookie from '../../assets/cookies.jpg'
import yogur from '../../assets/yogur.jpg'
import paneton from '../../assets/paneton.jpg'
import { Link } from 'react-router-dom'

const dataHelper = [
  {
    id: 1,
    title: 'Alimentos',
    image: fideo
  },
  {
    id: 2,
    title: 'Galletas',
    image: cookie
  },
  {
    id: 3,
    title: 'Lácteos',
    image: yogur
  },
  {
    id: 4,
    title: 'Panetones',
    image: paneton
  }
]
const Card = () => {
  return (
    <div className="card__container container">
      { dataHelper.map(item => (
        <div className="card__image" key={item.id}>
        <img src={item.image} />
        <div className="card-description">
          <Link to={'/productos'}>{item.title}</Link>
        </div>
        <Link to={'/productos'}>
          <button className="btn-mini ">Ver más</button>
        </Link>
      </div>
      ))}
    </div>
  )
}

export default Card
