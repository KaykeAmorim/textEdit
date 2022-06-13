const connection = require('./database/Database')
const bodyParser = require('body-parser')
const port = 8080
const express = require('express')
const app = express()
const categoriesController = require('./categories/CategoriesController')
const articleController = require('./article/ArticleController')

connection.authenticate()
    .then(()=>{
        console.log('Mysql Conectado!')
    })
    .catch(error => {
        console.log(error);
    })


app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/', categoriesController)
app.use('/', articleController)

const Category = require('./categories/Category')
const Article = require('./article/Article')

app.get('/',function(req,res){
    res.render('index')
})

app.listen(port, () => {console.log("Servidor online!")})