import express from 'express'
import  Sismo  from '../modelos/sismo.js'
const router = express.Router()

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
    res.status(500).json({ error: 'Error al guardar el sismo' })
  }
})

router.get('/', async (req, res) => {
  try {
    const sismos = await Sismo.find()
    res.json(sismos)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los sismos' })
  }
})


router.delete('/:id', async (req, res) => {
  await Sismo.findByIdAndDelete(req.params.id)
  res.send({ mensaje: 'Registro eliminado' })
})

router.get('/sismo', (req, res) => {
  const { fecha, magnitud, ubicacion } = req.query;
  res.json({
    fecha,
    magnitud,
    ubicacion
  });
});
export default router
