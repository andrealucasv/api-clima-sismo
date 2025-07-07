import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import rutasSismo from './rutas/sismo.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use('/api/sismo', rutasSismo)

const PUERTO = process.env.PUERTO || 3005

mongoose
  .connect(`mongodb://${process.env.MONGO_USUARIO}:${process.env.MONGO_CLAVE}@${process.env.MONGO_HOST}:${process.env.MONGO_PUERTO}/?authSource=admin`)
  .then(() => {
    console.log('MongoDB esta conectado')
    app.listen(PUERTO, () => {
      console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
    })
  })
  .catch((err) => {
    console.error('Se ha producido un error al conectar a MongoDB:', err)
  })
