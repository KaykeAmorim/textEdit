const express = require('express');
const Category = require('../categories/Category')
const router = express.Router();
const Article = require('./Article')
const slugify = require('slugify')

router.get('/adm/articles', (req,res) =>{
    res.render('adm/articles/index',{articlesInfo: []})
})

router.get('/adm/articles/new', (req, res) => {
    Category.findAll({raw:true}).then((result) => {
        res.render('adm/articles/new', {categories: result})
    })
})

router.post('/articles/save', (req,res) => {
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(()=>{
        res.redirect('/adm/')
    })
})

module.exports = router