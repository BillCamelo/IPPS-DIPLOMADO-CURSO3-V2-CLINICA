import { Paciente } from '../models/paciente.model.js'

export const crear = async (datos, medicoId) => {
  return await Paciente.create({ ...datos, medico: datos.medico || medicoId })
}

export const listar = async (filtro = {}) => {
  return await Paciente.find(filtro).populate('medico', 'nombre especialidad')
}

export const listarPorMedico = async (medicoId, prevision) => {
  const filtro = { medico: medicoId }
  if (prevision) {
    filtro.prevision = prevision
  }
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