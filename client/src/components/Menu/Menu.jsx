import { useState } from 'react'
import logo from '../../assets/logo.jpg'
import './menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [active, setActive] = useState(true)
  const handleHamburger = () => {
    setActive(!active)
  }

  return (
    <nav>
      <div className='logo__container'>
        <span><img src={logo} alt="" /></span>
        <span className='marca'>Malitolia</span>
      </div>
      <div className={active ? 'menu__container active' : 'menu__container'}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/productos/post">Añadir Producto</Link></li>
        </ul>
      </div>
      <div className={active ? 'hamburger' : 'hamburger active'} onClick={handleHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Menu
