import type { HttpContext } from '@adonisjs/core/http'
import DoctorHorario from '#models/doctor_horario'
import { createDoctorHorarioValidator, updateDoctorHorarioValidator } from '#validators/doctor_horario'

export default class DoctorHorarioController {
  // GET /doctor_horarios
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const horarios = await DoctorHorario
      .query()
      .preload('doctor')
      .paginate(page, limit)

    return response.ok({
      data: horarios.all(),
      total: horarios.getMeta().total,
    })
  }

  // GET /doctor_horarios/:id
  async show({ params, response }: HttpContext) {
    const horario = await DoctorHorario.query()
      .where('id', params.id)
      .preload('doctor')
      .first()

    if (!horario) {
      return response.notFound({ message: 'Horario no encontrado' })
    }

    return response.ok(horario)
  }

  // POST /doctor_horarios
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createDoctorHorarioValidator)

    const horario = await DoctorHorario.create(data)
    await horario.load('doctor') // 👈 cargar la relación después de crear

    return response.created(horario)
  }

  // PATCH /doctor_horarios/:id
  async update({ params, request, response }: HttpContext) {
    const horario = await DoctorHorario.find(params.id)

    if (!horario) {
      return response.notFound({ message: 'Horario no encontrado' })
    }

    const data = await request.validateUsing(updateDoctorHorarioValidator)
    horario.merge(data)
    await horario.save()
    await horario.load('doctor') // 👈 cargar la relación después de actualizar

    return response.ok(horario)
  }

  // DELETE /doctor_horarios/:id
  async destroy({ params, response }: HttpContext) {
    const horario = await DoctorHorario.find(params.id)

    if (!horario) {
      return response.notFound({ message: 'Horario no encontrado' })
    }

    await horario.delete()
    return response.ok({ message: 'Horario eliminado correctamente' })
  }
}
