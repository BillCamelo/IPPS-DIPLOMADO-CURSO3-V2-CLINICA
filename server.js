import express from 'express'
import cors from 'cors'

import { conectar } from 'config/db.js'
 
import { authRoutes } from './routes/auth.route.js'

const app = express()


app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
//http://localhost:3001/auth/registrar/
//http://localhost:3001/auth/login/

await conectar()

app.listen(3001, ()=>{
    console.log('levantmos al apu')
})