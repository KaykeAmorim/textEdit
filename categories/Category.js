const Sequelize = require('sequelize')
const connection = require('../database/Database')

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.sync({force:false}).then()
module.exports = Category