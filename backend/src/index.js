const express = require('express')
const mongoose = require('mongoose')
const {routes} = require('./routes')
const app = express()
mongoose.connect('mongodb+srv://alvaro:38517344@cluster0-bred1.mongodb.net/DevRadar?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then((x) => { console.log('connect')})
    .catch((err) => { console.log('Error ' + err)})

app.use(express.json())
app.use(routes)
app.listen(3333)