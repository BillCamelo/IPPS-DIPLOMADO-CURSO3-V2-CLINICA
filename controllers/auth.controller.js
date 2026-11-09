import * as service from '../services/auth.service.js'

export const registrar = async (req, res) => {
  const datos = req.body
  const resultado = await service.registrar(datos)
  res.status(201).json(resultado)
}

export const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Faltan datos' })
  }

  const resultado = await service.login(email, password)

  if (!resultado) {
    return res.status(401).json({ error: 'Credenciales incorrectas' })
  }

  res.status(200).json(resultado)
}