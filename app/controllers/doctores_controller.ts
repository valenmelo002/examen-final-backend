import type { HttpContext } from '@adonisjs/core/http'
import Doctore from '#models/doctore'
import { createDoctorValidator, updateDoctorValidator } from '#validators/doctore'

export default class DoctorsController {
  // GET /doctores?page=1&limit=10&nombre=juan
  async list({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const nombre = request.input('nombre')

    const query = Doctore.query().preload('especialidad')

    if (nombre) {
      query.whereILike('nombre_completo', `%${nombre}%`)
    }

    const paginated = await query.paginate(page, limit)

    return response.ok({
      data: paginated.all(),
      total: paginated.getMeta().total,
    })
  }

  // GET /doctores/:id
  async get({ params, response }: HttpContext) {
    const doctor = await Doctore.query()
      .where('id', params.id)
      .preload('especialidad')
      .firstOrFail()

    return response.ok(doctor)
  }

  // POST /doctores
  async create({ request, response }: HttpContext) {
    const data = await request.validateUsing(createDoctorValidator)
    const doctor = await Doctore.create(data)

    const doctorFull = await Doctore.query()
      .where('id', doctor.id)
      .preload('especialidad')
      .firstOrFail()

    return response.created(doctorFull)
  }

  // PUT /doctores/:id
  async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(updateDoctorValidator)

    const doctor = await Doctore.findOrFail(params.id)
    doctor.merge(data)
    await doctor.save()

    const updatedDoctor = await Doctore.query()
      .where('id', doctor.id)
      .preload('especialidad')
      .firstOrFail()

    return response.ok(updatedDoctor)
  }

  // DELETE /doctores/:id
  async destroy({ params, response }: HttpContext) {
    try {
      const doctor = await Doctore.findOrFail(params.id)
      await doctor.delete()
      return response.noContent()
    } catch (error) {
      console.error('❌ Error al eliminar doctor:', error)
      return response.internalServerError({
        message: 'No se pudo eliminar el doctor.',
      })
    }
  }
}
