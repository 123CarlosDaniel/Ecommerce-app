import Categorias from './components/Categorias/Categorias'
import Contacto from './components/Contacto/Contacto'
import Header from './components/Header/Header'
import Sostenibilidad from './components/Sostenibilidad/Sostenibilidad'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Categorias></Categorias>
      <Sostenibilidad></Sostenibilidad>
      <Contacto></Contacto>
    </div>
  )
}

export default App
