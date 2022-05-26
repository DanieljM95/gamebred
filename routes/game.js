const express = require('express')
const Game = require('../models/games')
const router = express.Router()



console.log('opened home router page')
router.get('/', async (req, res) => {
    console.log('inside our home router')

    res.render('fighting-game/index')
})



module.exports = router