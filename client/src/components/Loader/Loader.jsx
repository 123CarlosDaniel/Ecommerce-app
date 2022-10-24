import loader from '../../assets/loader.svg'
import './Loader.css'

export default function Loader () {
  return (
      <div className='Loader'>
        <img src={loader}></img>
      </div>
  )
}
