import express from 'express'
import cors from 'cors'
import router from './routes/index.routes.js'
import morgan from 'morgan'
const app = express()

// middlewares

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// settings
app.set('port', process.env.PORT || 4000)
app.set('query parser', 'simple')
app.get('/', (req, res) => {
  console.log(req.query)
  res.send('Bienvenido a mi aplicacion')
})
// routes
app.use('/api', router)

export default app
