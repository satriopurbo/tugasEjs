const usersModel = require('../Model/usersModel')
const {hashPassword, compare} = require('../helper/bcrypt')
const { generateToken} = require('../helper/jwt')





class Controller{

    static  async create(req,res){
        const{name,password,email} = req.body
        let encryptedPassword = hashPassword(password)
        usersModel.findAll({where:{
            name:name
        }})
        .then(check=>{
            if(check.length){
                res.render('user/register',{pesan:"USERNAME sudah Terdaftar"})
            }
            else{
                usersModel.create({name:name,password:encryptedPassword,email:email})
                .then(respon=>{
                    res.redirect('/users/login')
                })
                .catch(err=>{
                    res.json({message:err})
                })
            }
        })
    }

    static formRegister(req,res){
        res.render('user/register',{pesan : "Silahkan mengisi formulir Registrasi"})
    }

    static formLogin(req,res){
        res.render('user/login.ejs',{pesan:'WELLCOME TO FOSAN'})
    }

    static logout(req,res){
        req.session.destroy()
        res.redirect('/users/login')
    }

    static login(req,res){
        const {name,password}=req.body
        usersModel.findAll({
            where:{
                name:name
            }
        })
        .then(data=>{
            
            if(data.length){
                let hasil= compare(password,data[0].dataValues.password);
                if(hasil){
                    let token = generateToken(data[0].dataValues);
                    req.session.token= token;
                    // res.redirect('/todo')
                    res.json({
                        pesan : "sukses"
                    })
                }
                else{
                    res.json(
                        {
                            pesan:"salahpass"
                        });
                }
            }
            res.json(
                {
                    pesan:"salahuser"
                });
        })
        .catch(err=>{
            res.json({message : err})
        })
    }

    static landingPage(req, res){
        res.render('user/landingPage.ejs')
    }


}

module.exports = Controller