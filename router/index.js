const router= require('express').Router()
const users = require('../router/users')
const todo = require('../router/todo')
const controller = require('../controller/usersController')


router.use('/users',users)
router.use('/todo',todo)



router.get('/',controller.formLogin)

module.exports = router