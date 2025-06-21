import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'doctor_horarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .bigInteger('doctor_id')
        .unsigned()
        .references('id')
        .inTable('doctores')
        .onDelete('CASCADE')
        .notNullable()

      table.string('dia', 20).notNullable()
      table.time('hora_inicio').notNullable()
      table.time('hora_fin').notNullable()
      table.boolean('activo').defaultTo(true)

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
