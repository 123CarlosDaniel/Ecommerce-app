import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header id='head'>
      <p className='textos'>
      <span>Malitolia</span> Lorem, ipsum. <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <Link className='btn-mini' to={'/productos'}>Ver mas</Link>
      </p>
    </header>
  )
}

export default Header
