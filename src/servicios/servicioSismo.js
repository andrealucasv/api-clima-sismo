import { Sismo } from '../modelos/sismo.js'

export async function guardarSismo(datos) {
  const sismo = new Sismo(datos)
  return await sismo.save()
}

export async function obtenerSismosPorPais(pais) {
  return await Sismo.find({ ubicacion: { $regex: pais, $options: 'i' } })
}

export async function eliminarSismo(id) {
  return await Sismo.findByIdAndDelete(id)
}
