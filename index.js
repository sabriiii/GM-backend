const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('dotenv').config()

const authRoutes = require('./routes/auth.router')

app.use('/auth', authRoutes)

const port = process.env.PORT || 3000 

const { getData } = require("./config/firebase")

getData("test", "test")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})