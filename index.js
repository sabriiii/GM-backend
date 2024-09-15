const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('dotenv').config()

const authRoutes = require('./routes/auth.router')
const articlesRoutes = require('./routes/articles.router')
const adminRoutes = require('./routes/admin.router')
const doctorRoutes = require('./routes/doctor.router')
const patientRoutes = require('./routes/patient.router')
const rapportsRoutes = require('./routes/rapports.router')
const rendezvousRoutes = require('./routes/rendez-vous.router')

app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use('/doctor', doctorRoutes)
app.use('/patient', patientRoutes)
app.use('/articles', articlesRoutes)
app.use('/rapports', rapportsRoutes)
app.use('/rendezvous', rendezvousRoutes)


const port = process.env.PORT || 3000 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})