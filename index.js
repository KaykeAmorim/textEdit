const connection = require('./database/Database')
const bodyParser = require('body-parser')
const port = 8080
const express = require('express')
const app = express()

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

app.get('/',function(req,res){
    res.render('index')
})

app.listen(port, () => {console.log("Servidor online!")})