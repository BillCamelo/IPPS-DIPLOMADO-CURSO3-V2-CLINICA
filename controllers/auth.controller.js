

import * as service from '../services/auth.service.js'

export const registrar = async ( req, res ) =>{
    //conetamos al servicio
     const datos = req.body

     const medico = await service.registrar( datos )

     return medico
}

export const login = async (req, res)=>{
    //conectamos al servicio de login
}