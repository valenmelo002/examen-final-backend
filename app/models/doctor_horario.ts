import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Doctore from '#models/doctore'

export default class DoctorHorario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'doctor_id' })
  declare doctorId: number

  @column()
  declare dia: string

  @column()
  declare horaInicio: string

  @column()
  declare horaFin: string

  @column()
  declare activo: boolean

  @belongsTo(() => Doctore, {
    foreignKey: 'doctorId',
  })
  declare doctor: BelongsTo<typeof Doctore>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
