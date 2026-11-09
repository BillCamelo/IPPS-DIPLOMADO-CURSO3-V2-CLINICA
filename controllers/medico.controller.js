import * as service from '../services/medico.service.js'

export const listar = async (req, res) => {
  const { especialidad } = req.query
  const medicos = await service.listar(especialidad)
  res.json(medicos)
}

export const perfil = async (req, res) => {
  const medico = await service.buscarPorId(req.medico.id)
  if (!medico) {
    return res.status(404).json({ error: 'Médico no encontrado' })
  }
  res.json(medico)
}

export const buscarPorId = async (req, res) => {
  const medico = await service.buscarPorId(req.params.id)
  if (!medico) {
    return res.status(404).json({ error: 'Médico no encontrado' })
  }
  res.json(medico)
}

export const listarPacientes = async (req, res) => {
  const medico = await service.buscarPorId(req.params.id)
  if (!medico) {
    return res.status(404).json({ error: 'Médico no encontrado' })
  }
  const pacientes = await service.listarPacientes(req.params.id)
  res.json(pacientes)
}