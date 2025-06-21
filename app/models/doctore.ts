import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Especialidad from './especialidad.js'

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

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime | null
}
