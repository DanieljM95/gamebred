const express = require('express')
const Game = require('../models/games')
const router = express.Router()



console.log('opened home router page')
router.get('/', async (req, res) => {
    console.log('inside our home router')
    const games = await Game.find().sort({
        createdAt: "desc"
    })
    res.render('home/home', { games: games })
})



module.exports = router