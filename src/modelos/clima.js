import mongoose from 'mongoose'

const climaSchema = new mongoose.Schema({
  ciudad: String,
  temperatura: Number,
  humedad: Number,
  condicion: String
})

export const Clima = mongoose.model('Clima', climaSchema)
