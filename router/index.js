const router= require('express').Router()
const users = require('../router/users')
const todo = require('../router/todo')


router.use('/users',users)
router.use('/todo',todo)



router.get('/', (req, res)=>{
    res.send('halaman home')
})

module.exports = router