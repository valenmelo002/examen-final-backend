import Doctor from '#models/doctore'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Doctor.createMany([
      {
        nombre_completo: 'Andrés Ramírez',
        documento: '10101010',
        telefono: '3100000001',
        correo: 'andres.ramirez@vetclinic.com',
        activo: true,
        especialidad_id: 1,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre_completo: 'Laura Pérez',
        documento: '20202020',
        telefono: '3100000002',
        correo: 'laura.perez@vetclinic.com',
        activo: true,
        especialidad_id: 2,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre_completo: 'Carlos Gómez',
        documento: '30303030',
        telefono: '3100000003',
        correo: 'carlos.gomez@vetclinic.com',
        activo: true,
        especialidad_id: 3,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre_completo: 'María Torres',
        documento: '40404040',
        telefono: '3100000004',
        correo: 'maria.torres@vetclinic.com',
        activo: true,
        especialidad_id: 4,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre_completo: 'Felipe Díaz',
        documento: '50505050',
        telefono: '3100000005',
        correo: 'felipe.diaz@vetclinic.com',
        activo: true,
        especialidad_id: 5,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
    ])
  }
}
