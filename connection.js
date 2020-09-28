const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tesDB','puka2','sehat',{

    host:'localhost',
    port : 5432,
    dialect : 'postgres',
    logging:false
});

module.exports=sequelize

