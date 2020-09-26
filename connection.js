const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres','postgres','postgres',{

    host:'localhost',
    port : 5432,
    dialect : 'postgres',
    logging:false
});

module.exports=sequelize

