import vine from '@vinejs/vine'

export const createDoctorValidator = vine.compile(
  vine.object({
    nombre_completo: vine.string().trim().minLength(3).maxLength(20),
    documento: vine
      .string()
      .trim()
      .minLength(6)
      .maxLength(15)
      .unique(async (db, value) => {
        const exists = await db.from('doctores').where('documento', value).first()
        return !exists
      }),
    correo: vine
      .string()
      .trim()
      .email()
      .unique(async (db, value) => {
        const exists = await db.from('doctores').where('correo', value).first()
        return !exists
      }),
    telefono: vine
      .string()
      .trim()
      .minLength(7)
      .maxLength(15)
      .unique(async (db, value) => {
        const exists = await db.from('doctores').where('telefono', value).first()
        return !exists
      }),
    activo: vine.boolean(),
    especialidad_id: vine
      .number()
      .positive()
      .exists(async (db, value) => {
        const row = await db.from('especialidades').where('id', value).first()
        return !!row
      }),
  })
)

export const updateDoctorValidator = vine.compile(
  vine.object({
    nombre_completo: vine.string().trim().minLength(3).maxLength(20),
    documento: vine.string().trim().minLength(6).maxLength(15), // Aquí no se valida unique para update
    correo: vine.string().trim().email(),
    telefono: vine.string().trim().minLength(7).maxLength(15),
    activo: vine.boolean(),
    especialidad_id: vine
      .number()
      .positive()
      .exists(async (db, value) => {
        const row = await db.from('especialidades').where('id', value).first()
        return !!row
      }),
  })
)
