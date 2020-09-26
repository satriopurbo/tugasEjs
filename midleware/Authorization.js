const user = require('../Model/usersModel')
const {verifyToken}=require('../helper/jwt')

const authorization = (req, res, next) => {
    const decode = verifyToken(req.session.token);
    const { id } = req.params
    user.findAll({
        where:{
            id:id
        }
    })
      .then( data => {
        //   console.log(data)
        if(data[0].id == decode.id){
          next()
        } else {
          res.json({status: 400, msg: ' ini Bukan Akun Anda'})
        }
      })
      .catch(err => {
        next(err)
      })
  }
  
   module.exports = authorization 