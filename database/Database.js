const Sequelize = require('sequelize')
const connection = new Sequelize('TextEdit','kayke','K310104+a',{
    host:'localhost',
    dialect: 'mysql',
    timezone:"-03:00"
})

module.exports = connection;