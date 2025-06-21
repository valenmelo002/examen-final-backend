import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Especialidad from './especialidad.ts'
import DoctorHorario from './doctor_horario.ts'

export default class Doctor extends BaseModel {
  public static table = 'doctores'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre_completo: string

  @column()
  declare documento: string

  @column()
  declare telefono: string

  @column()
  declare correo: string

  @column()
  declare activo: boolean

  @column()
  declare especialidad_id: number

  @belongsTo(() => Especialidad, {
    foreignKey: 'especialidad_id',
  })
  declare especialidad: BelongsTo<typeof Especialidad>

  @hasMany(() => DoctorHorario, {
    foreignKey: 'doctor_id',
  })
  declare horarios: HasMany<typeof DoctorHorario>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime | null
}
