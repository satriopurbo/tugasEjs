const todo = require('../Model/todoModel')
const user = require('../Model/usersModel')
const { verifyToken } = require('../helper/jwt')



class Controller {

    static create(req, res) {
        const { kegiatan, status } = req.body
        const decode = verifyToken(req.session.token);
        todo.create({ kegiatan: kegiatan, status: status, UserId: decode.id }, { returning: true })
            .then(respon => {
                res.redirect('/todo')
            })
            .catch(err => {
                res.json({ message: err })
            })
    }

    static async listAll(req, res) {
        const decode = verifyToken(req.session.token);
        let data = await todo.findAll({
            include: user
        })
        let profil = decode.id
        // .then(x=>{
        res.render('todo/list.ejs', { data, profil });
        // })
        // .catch(err=>{
        //     res.json({err})
        // })
    }


    static update(req, res) {

        todo.update(
            req.body,
             {
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                res.redirect(`/todo/`)
            })
            .catch(err => {
                res.json('update gagal')
            })
    }

    static delete(req, res) {
        const { id } = req.params;
        todo.destroy({
            where: {
                id: id
            }
        })
            .then(response => {
                res.redirect('/todo')
            })
            .catch(err => {
                res.json(err)
            })
    }

    static formUpdate(req, res) {
        const decode = verifyToken(req.session.token);
        let profil = decode.id;
        todo.findAll({
            where: {
                id: req.params.id
            }
        }).then(hasil => {
            res.render('todo/formUpdate.ejs', { hasil,profil })
        })

    }

    static formList(req, res) {
        res.render('todo/list.ejs')
    }


    static async findOne(req, res) {
        let data = await todo.findAll({
            where: {
                UserId: req.params.id
            },
            include: user
        });

        res.render('todo/listByUser.ejs', { data });
    }

    static formAddKegiatan(req, res) {
        res.render('todo/formAdd.ejs')
    }

}

module.exports = Controller