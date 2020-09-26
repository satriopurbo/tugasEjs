const {verifyToken}= require('../helper/jwt')
const modelUser = require('../Model/usersModel')

function authentification(req,res,next){

    if(req.session.token){
        const decode = verifyToken(req.session.token);

        modelUser.findAll({
            where:{
                id:decode.id
            }
        })
        .then(data=>{
            if(data.length){
                next()
            }
            else{
                res.redirect('/users/login')
            }
        })
    }
    else{
        res.redirect('/users/login')
    }
}

module.exports = authentification