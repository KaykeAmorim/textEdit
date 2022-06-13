const express = require('express')
const router = express.Router()
const Category = require('./Category')
const slugify = require('slugify')
const { query } = require('express')

router.get('/adm/categories/new', (req,res) => {
    res.render('adm/categories/new')
})

router.post('/categories/save', (req,res) => {
    let title = req.body.title
    Category.create({
        title: title,
        slug: slugify(title)
    }).then(()=>{
        res.redirect('/adm/categories')
    })
})

router.get('/adm/categories', (req, res) => {
    Category.findAll({
        raw:true,
        attribuites: ['id','title','slug']
    }).then((result)=>{
        res.render('adm/categories/index',{categoriesInfo: result})
    })
})

router.post('/categories/delete', (req,res) => {
    let id = req.body.id;
    if((!id) || (isNaN(id))){
        res.redirect('/adm/categories')
    }
    else{
        Category.destroy({where:{id:id}}).then(()=>{
            res.redirect('/adm/categories')
        })
    }
})

router.get('/adm/categories/edit/:id', (req, res) => {
    let id = req.params.id
    if((!id)||(isNaN(id))){
        res.redirect('/adm/categories')
    }
    else{
        Category.findByPk(id)
            .then((result)=>{
                if(result){
                    res.render('adm/categories/edit',{category:result})
                }
                else{
                    res.redirect('/adm/categories')
                }
            })
            .catch((error) => {
                res.redirect('/adm/categories')
            })
    }
})

router.post('/categories/update', (req,res) => {
    let id = req.body.id
    let title = req.body.title

    if((!id)||(isNaN(id))){
        res.redirect('/adm/categories')
    }
    else{
        Category.update({title:title,slug:slugify(title)},{where: {id:id}}).then(()=>{
            res.redirect('/adm/categories')
        })
    }

    
})

module.exports = router