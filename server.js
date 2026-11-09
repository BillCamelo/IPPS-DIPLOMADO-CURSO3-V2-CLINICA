import express from 'express'
import cors from 'cors'

import { conectar } from './config/db.js'
 
import { authRoutes } from './routes/auth.routes.js'
import { medicoRoutes } from './routes/medico.route.js'
import { pacienteRoutes } from './routes/paciente.route.js'

const app = express()


app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/medicos', medicoRoutes)
app.use('/pacientes', pacienteRoutes)

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Id con formato inválido' })
  }
  if (err.code === 11000) {
    return res.status(409).json({ error: 'El registro ya existe' })
  }
  res.status(500).json({ error: 'Error del servidor' })
})

await conectar()

app.listen(3001, ()=>{
    console.log('levantmos al apu')
})