const express = require('express')
const mongoose = require('mongoose')
const {routes} = require('./routes')
const cors = require('cors')
const infos = require('./config')
const app = express()
mongoose.connect(infos.credentials, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then((x) => { console.log('connect')})
    .catch((err) => { console.log('Error ' + err)})

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)
