import reactDom from 'react-dom'
import './main.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Productos from './components/Productos/Productos'
import Menu from './components/Menu/Menu'
import PostP from './components/FormularioProductos/PostP'

reactDom.render(
  <>
  <HashRouter>
  <Menu></Menu>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/productos" element={<Productos/>}/>
      <Route path="/productos/post" element={ <PostP /> }></Route>
    </Routes>
  </HashRouter>
  </>,
  document.getElementById('root')
)
