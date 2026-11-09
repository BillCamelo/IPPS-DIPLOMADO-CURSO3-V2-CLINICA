import * as service from '../services/paciente.service.js'
import { Paciente } from '../models/paciente.model.js'

export const crear = async (req, res) => {
  const paciente = await service.crear(req.body, req.medico.id)
  res.status(201).json(paciente)
}

export const listar = async (req, res) => {
  const { prevision } = req.query
  const pacientes = await service.listarPorMedico(req.medico.id, prevision)
  res.json(pacientes)
}

export const buscarPorId = async (req, res) => {
  const paciente = await service.buscarPorId(req.params.id)
  if (!paciente) {
    return res.status(404).json({ error: 'Paciente no encontrado' })
  }
  res.json(paciente)
}

export const actualizar = async (req, res) => {
  const paciente = await Paciente.findById(req.params.id)
  if (!paciente) {
    return res.status(404).json({ error: 'Paciente no encontrado' })
  }

  if (paciente.medico.toString() !== req.medico.id) {
    return res.status(403).json({ error: 'No eres el médico tratante de este paciente' })
  }

  const actualizado = await service.actualizar(req.params.id, req.body)
  res.json(actualizado)
}

export const eliminar = async (req, res) => {
  const paciente = await Paciente.findById(req.params.id)
  if (!paciente) {
    return res.status(404).json({ error: 'Paciente no encontrado' })
  }

  if (paciente.medico.toString() !== req.medico.id) {
    return res.status(403).json({ error: 'No eres el médico tratante de este paciente' })
  }

  await service.eliminar(req.params.id)
  res.status(204).send()
}