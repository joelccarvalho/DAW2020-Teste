var mongoose = require('mongoose')

var batismoSchema = new mongoose.Schema({
    _id: {
        type: String,
        auto: true,
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    pai: {
        type: String,
        required: true
    },
    mae: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('batismo', batismoSchema)