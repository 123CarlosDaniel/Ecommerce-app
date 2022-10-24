import PropTypes from 'prop-types'
import { useState } from 'react'

const Modal = (props) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span onClick={() => props.handleClick(false)} className="close">
            &times;
          </span>
          <div className="content">
            <div className="content-left">
              <img src={props.imagen} />
              <p>{props.title}</p>
            </div>
            <div className="content-right">
              <h3>Descripcion</h3>
              <p>{props.description}</p>
              <h3>Price</h3>
              <p>$ {props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  imagen: PropTypes.string,
  price: PropTypes.string
}

const CardImage = (props) => {
  const [modal, setModal] = useState(false)

  return (
    <div className="card__image">
      <img src={props.imagen} />
      <div className="card-description">
        <a>{props.title}</a>
      </div>
      <button className="btn-mini compra">Buy</button>
      <button onClick={() => setModal(true)} className="btn-mini info">
        +
      </button>
      {modal && (
        <Modal
          title={props.title}
          description={props.description}
          imagen={props.imagen}
          handleClick={setModal}
          price={props.price}
        />
      )}
    </div>
  )
}

CardImage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imagen: PropTypes.string,
  price: PropTypes.number
}

export default CardImage
