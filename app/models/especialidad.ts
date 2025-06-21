import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Doctore from './doctore.ts'

export default class Especialidad extends BaseModel {
  public static table = 'especialidades'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @hasMany(() => Doctore, {
    foreignKey: 'especialidad_id',
  })
  declare doctores: HasMany<typeof Doctore>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime | null
}
