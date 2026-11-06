
import { Medico } from '../models/medico.model.js'


export const registrar = async ( datos ) =>{
    const medico = await Medico.create(datos )
}