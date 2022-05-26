const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        requires: true
    },
    description: {
        type: String
    },
    link: {
        type: String

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }

})

gameSchema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, {
            lower: true, strict: true
        })
    }

    next()
})



module.exports = mongoose.model('Game', gameSchema)