import Especialidad from '#models/especialidad'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Especialidad.createMany([
      { nombre: 'Medicina General' },
      { nombre: 'Cirugía' },
      { nombre: 'Dermatología' },
      { nombre: 'Odontología Veterinaria' },
      { nombre: 'Cardiología' },
    ])
  }
}
