const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

router.get('/article', (req,res) =>{
    res.send("Eae CBA ?")
})

module.exports = router