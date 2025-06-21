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
