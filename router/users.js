const router = require('express').Router()
const controller = require('../controller/usersController')


router.post('/register', controller.create)
router.post('/login',controller.login)
router.get('/register',controller.formRegister)
router.get('/login', controller.formLogin)
router.get('/logout',controller.logout)

module.exports=router