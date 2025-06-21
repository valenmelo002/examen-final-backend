/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const DoctoresController = () => import('#controllers/doctores_controller')
const EspecialidadesController = () => import('#controllers/especialidades_controller')
const DoctorHorariosController = () => import('#controllers/doctor_horarios_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

//Rutas para doctores
router.get('/doctores', [DoctoresController, 'list'])
router.get('/doctores/:id', [DoctoresController, 'get'])
router.post('/doctores', [DoctoresController, 'create'])
router.put('/doctores/:id', [DoctoresController, 'update'])
router.delete('/doctores/:id', [DoctoresController, 'destroy'])

//Rutas para especialidades
router.get('/especialidades', [EspecialidadesController, 'list'])

//Rutas para horarios de doctores
  router.group(() => {
  router.get('/', [DoctorHorariosController, 'index'])         // Listar horarios
  router.get('/:id', [DoctorHorariosController, 'show'])       // Mostrar horario por ID
  router.post('/', [DoctorHorariosController, 'store'])        // Crear nuevo horario
  router.patch('/:id', [DoctorHorariosController, 'update'])   // Actualizar horario
  router.delete('/:id', [DoctorHorariosController, 'destroy']) // Eliminar horario
}).prefix('/doctor_horarios')
