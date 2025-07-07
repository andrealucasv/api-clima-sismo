import { Clima } from '../modelos/clima.js'

export async function guardarClima(datos) {
  const clima = new Clima(datos)
  return await clima.save()
}

export async function obtenerClimasPorCiudad(ciudad) {
  return await Clima.find({ ciudad })
}

export async function eliminarClima(id) {
  return await Clima.findByIdAndDelete(id)
}
