const {DataTypes} = require('sequelize')
const sq = require('../connection')
const users= require('../Model/usersModel')

const todo = sq.define('ToDo',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    kegiatan:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})

todo.belongsTo(users)
users.hasMany(todo)

todo.sync({alter:true})
module.exports=todo

