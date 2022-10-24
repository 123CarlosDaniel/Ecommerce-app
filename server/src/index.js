
import app from './app.js'
import './db.js'

export const server = app.listen(app.get('port'), () => {
  console.log(`Server on http://localhost:${app.get('port')}`)
})

export default app
