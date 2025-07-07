import express from 'express'
import { guardarClima, obtenerClimasPorCiudad } from '../servicios/servicioClima.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const clima = await guardarClima(req.body)
    res.status(201).json(clima)
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar clima' })
  }
})

router.get('/:ciudad', async (req, res) => {
  try {
    const datos = await obtenerClimasPorCiudad(req.params.ciudad)
    res.json(datos)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener clima' })
  }
})

export default router
