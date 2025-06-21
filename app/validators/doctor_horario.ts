// start/validators/doctor_horario_validator.ts
import vine from '@vinejs/vine'

const horaRegex = /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/ // Acepta HH:mm y HH:mm:ss

export const createDoctorHorarioValidator = vine.compile(
  vine.object({
    doctorId: vine
      .number()
      .positive()
      .exists(async (db, value) => {
        const doctor = await db.from('doctores').where('id', value).first()
        return !!doctor
      }),

    dia: vine
      .string()
      .trim()
      .toLowerCase()
      .in(['lunes', 'martes', 'miércoles', 'miercoles', 'jueves', 'viernes', 'sábado', 'sabado', 'domingo']),

    horaInicio: vine.string().regex(horaRegex),

    horaFin: vine.string().regex(horaRegex),

    activo: vine.boolean(),
  })
)

export const updateDoctorHorarioValidator = vine.compile(
  vine.object({
    doctorId: vine
      .number()
      .positive()
      .exists(async (db, value) => {
        const doctor = await db.from('doctores').where('id', value).first()
        return !!doctor
      })
      .optional(),

    dia: vine
      .string()
      .trim()
      .toLowerCase()
      .in(['lunes', 'martes', 'miércoles', 'miercoles', 'jueves', 'viernes', 'sábado', 'sabado', 'domingo'])
      .optional(),

    horaInicio: vine.string().regex(horaRegex).optional(),

    horaFin: vine.string().regex(horaRegex).optional(),

    activo: vine.boolean().optional(),
  })
)
