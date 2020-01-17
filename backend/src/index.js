const express = require('express')
const mongoose = require('mongoose')
const {routes} = require('./routes')
const cors = require('cors')
const http = require('http')
const infos = require('./config')
const {setupWebsocket} = require("./websocket");
const app = express()

const server = http.Server(app)
setupWebsocket(server)
mongoose.connect(infos.credentials, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then((x) => { console.log('connect')})
    .catch((err) => { console.log('Error ' + err)})

app.use(cors())
app.use(express.json())
app.use(routes)
server.listen(3333)
