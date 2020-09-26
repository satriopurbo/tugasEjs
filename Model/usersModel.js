const{DataTypes}= require('sequelize')
const sq = require('../connection')

const users = sq.define('Users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    password:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    email:{
        type:DataTypes.STRING,
        defaultValue:''
    }

})




users.sync({alter:true})
module.exports=users