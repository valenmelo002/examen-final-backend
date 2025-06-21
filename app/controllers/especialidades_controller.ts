import type { HttpContext } from '@adonisjs/core/http'
import Especialidad from '#models/especialidad'

export default class EspecialidadesController {
  // GET /especialidades
  async list({ response }: HttpContext) {
    const especialidades = await Especialidad.all()
    return response.ok(especialidades)
  }
}
