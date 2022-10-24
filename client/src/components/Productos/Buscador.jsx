import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBowlFood,
  faCookieBite,
  faCandyCane,
  faPaw,
  faPlateWheat
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import propTypes from 'prop-types'
const urlApi = import.meta.env.VITE_URL_API // desplegado en render

const Buscador = ({ setUrl }) => {
  const [active, setActive] = useState('')
  return (
    <div className="buscador">
          <h3 className="buscador-title"> Categorías</h3>
          <div className="lista__container">
            <ul className="lista-items">
              <li>
                <button onClick={() => {
                  setUrl(`${urlApi}?category=alimentos`)
                  setActive('alimentos')
                }
                  }
                className={ active === 'alimentos' ? 'active' : '' }
                ><FontAwesomeIcon icon={faBowlFood} /> Alimentos</button>
              </li>
              <li>
                <button onClick={() => {
                  setUrl(`${urlApi}?category=confites`)
                  setActive('confites')
                }}
                className={ active === 'confites' ? 'active' : '' }
                ><FontAwesomeIcon icon={faCandyCane} /> Confites</button>
              </li>
              <li>
                <button onClick={() => {
                  setUrl(`${urlApi}?category=mascotas`)
                  setActive('mascotas')
                }}
                className={ active === 'mascotas' ? 'active' : '' }
              ><FontAwesomeIcon icon={faPaw} /> Mascotas</button>
              </li>
              <li>
                <button onClick={() => {
                  setUrl(`${urlApi}?category=panetones`)
                  setActive('panetones')
                }}
                className={ active === 'panetones' ? 'active' : '' }
              ><FontAwesomeIcon icon={faCookieBite} /> Panetones</button>
              </li>
              <li>
                <button onClick={() => {
                  setUrl(`${urlApi}`)
                  setActive('')
                }}><FontAwesomeIcon icon={faPlateWheat} /> Todo</button>
              </li>
            </ul>
          </div>
        </div>
  )
}
Buscador.propTypes = {
  setUrl: propTypes.func
}

export default Buscador
