import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'doctores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('nombre_completo').notNullable()
      table.string('documento').notNullable().unique()
      table.string('telefono').notNullable().unique()
      table.string('correo').notNullable().unique()
      table.boolean('activo').defaultTo(true)

      table
        .bigInteger('especialidad_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('especialidades')
        .onDelete('CASCADE')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
