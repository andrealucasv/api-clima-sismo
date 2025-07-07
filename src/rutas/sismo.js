import express from 'express'
import  {Sismo}  from '../modelos/sismo.js'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const sismos = await Sismo.find()
    res.json(sismos)
  } catch (error) {
    console.error('Error al obtener los sismos', error)
    res.status(500).json({ error: 'Error al obtener los sismos' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { fecha, magnitud, ubicacion } = req.body
    const nuevoSismo = new Sismo({ fecha, magnitud, ubicacion })
    await nuevoSismo.save()

    res.status(201).json({
      mensaje: 'Sismo guardado en la base de datos',
      sismo: nuevoSismo
    })
  } catch (error) {
    console.error('Error al guardar el sismo:', error)
    res.status(500).json({ error: 'Error al guardar el sismo' })
  }
})





export default router
