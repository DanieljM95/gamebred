const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const Game = require('./models/games')
const articleRouter = require('./routes/articles')
const gameRouter = require('./routes/game')
const homeRouter = require('./routes/home')
const methodOverride = require('method-override')
const games = require('./models/games')
const app = express()

mongoose.connect('mongodb://localhost/review')

app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: "desc"
    })

    res.render('articles/index', { articles: articles })
})
app.use('/articles', articleRouter)
app.use('/home', homeRouter)
app.use('/fighting-game', gameRouter)
app.listen(5000)