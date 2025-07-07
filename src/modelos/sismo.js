import mongoose from 'mongoose'

const sismoSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true
  },
  magnitud: {
    type: Number,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  }
})

export const Sismo = mongoose.model('Sismo', sismoSchema)
