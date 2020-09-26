const router = require('express').Router()
const controller = require('../controller/todoController')
const authentification = require('../midleware/Authentification')
const authorization = require('../midleware/Authorization')


router.get('/',authentification,controller.listAll)
router.post('/create',authentification,controller.create)
router.get('/create',authentification,controller.formAddKegiatan)

// router.put('/:id',authentification,controller.update)
router.get('/delete/:id',authentification,controller.delete)
router.post('/update/:id',authentification,controller.update)
router.get('/update/:id',authentification,controller.formUpdate)
router.get('/:id',authentification,authorization,controller.findOne)


module.exports=router