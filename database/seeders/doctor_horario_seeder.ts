import DoctorHorario from '#models/doctor_horario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class DoctorHorarioSeeder extends BaseSeeder {
  public async run() {
    await DoctorHorario.createMany([
      {
        doctorId: 1,
        dia: 'Lunes',
        horaInicio: '08:00',
        horaFin: '12:00',
        activo: true,
      },
      {
        doctorId: 1,
        dia: 'Martes',
        horaInicio: '14:00',
        horaFin: '18:00',
        activo: true,
      },
      {
        doctorId: 2,
        dia: 'Miércoles',
        horaInicio: '09:00',
        horaFin: '13:00',
        activo: true,
      },
      {
        doctorId: 3,
        dia: 'Jueves',
        horaInicio: '10:00',
        horaFin: '15:00',
        activo: false,
      },
      {
        doctorId: 4,
        dia: 'Viernes',
        horaInicio: '08:00',
        horaFin: '11:00',
        activo: true,
      },
      {
        doctorId: 5,
        dia: 'Sábado',
        horaInicio: '09:00',
        horaFin: '12:00',
        activo: true,
      },
    ])
  }
}
