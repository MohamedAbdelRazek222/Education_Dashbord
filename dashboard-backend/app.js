require('dotenv').config()
const express = require('express')
var cors = require('cors')

const connectBD = require('./DB/connection')
const { addUser } = require('./modules/annonsements/controller/annonsement.controller')
const { announcementRouter, quiaRouter } = require('./modules/index.router')

const app = express()
app.use(cors())
const port = 3001
app.use(express.json())
app.use(announcementRouter,quiaRouter)


connectBD()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))