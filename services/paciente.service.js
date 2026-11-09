import { Paciente } from '../models/paciente.model.js'

export const crear = async (datos) => {
  return await Paciente.create(datos)
}

export const listar = async (filtro = {}) => {
  return await Paciente.find(filtro).populate('medico', 'nombre especialidad')
}

export const buscarPorId = async (id) => {
  return await Paciente.findById(id).populate('medico', 'nombre especialidad')
}

export const actualizar = async (id, datos) => {
  const { medico, ...datosSeguros } = datos
  return await Paciente.findByIdAndUpdate(id, datosSeguros, {
    new: true,
    runValidators: true
  })
}

export const eliminar = async (id) => {
  return await Paciente.findByIdAndDelete(id)
}